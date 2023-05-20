import React, { useState, useEffect } from "react";
import axios from "axios";
import { shades } from "../theme";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  
  getProduct,
  clearChosenProduct,
} from "../redux/actions/productActions";
import Loading from "../components/Loading";

import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductDetails = () => {
  const [count, setCount] = useState(1); // state for keeping track of count
  const [isLoading, setIsLoading] = useState(true); // state for keeping track of loading status

  const { productId } = useParams(); // get the product ID from the URL parameters
  console.log(
    "🚀 ~ file: ProductDetails.js:18 ~ ProductDetails ~ productId:",
    productId
  );
  
  const product = useSelector((state) => state.product); // get the product data from the Redux store
  console.log(
    "🚀 ~ file: ProductDetails.js:20 ~ ProductDetails ~ product:",
    product
  );

  const { thumbnail, title, price, category, description } = product || {}; // destructure the product data

  const dispatch = useDispatch(); // initialize dispatch function to dispatch actions to Redux store

  /*
  const fetchProductDetail = async (id) => {
    setIsLoading(true); // set isLoading to true before making API call
    setTimeout(async () => {
      const response = await axios
        .get(`https://dummyjson.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
      setIsLoading(false); // set isLoading to false once data is returned
    }, 1000); // delay API call by 2 seconds
  }; 
  */

  /* useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]); */

  // fetch the product details from the API using the product ID
  useEffect(() => {
    setIsLoading(true); // set isLoading to true before making API call
    setTimeout(() => {
      if (productId && productId !== "") dispatch(getProduct(productId)); // if product ID is valid, fetch the product details from API
      setIsLoading(false); // set isLoading to false once data is returned
    }, 2000); // delay API call by 2 seconds

    // clean up function, remove the previous product
    return () => {
      dispatch(clearChosenProduct());
    };
  }, []);

  // if data is still being fetched, show loading spinner
  if (isLoading) {
    return <Loading />;
  }

  // render the product details if the product data is available
  return (
    <Box width="80%" m="80px auto" height="100vh" padding="4rem 0">
      {product && ( // check if the product is there then render the JSX
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={product?.title}
              height="460px"
              width="100%"
              style={{ objectFit: "cover" }}
              src={thumbnail}
            />
          </Box>
          <Box flex="1 1 50%">
            <Box display="flex" flexDirection="column" gap="2rem">
              <h1>{title}</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <h2>Price: </h2>
                <h3
                  style={{ marginTop: "-8px" }}
                  className="ui orange tag label"
                >
                  ${price}
                </h3>
              </div>
              <div>
                <h2>Category: </h2>
                <h3
                  style={{ marginTop: "0" }}
                  className="ui orange block header"
                >
                  {category}
                </h3>
              </div>
              <div>
                <h2>Description: </h2>
                <h4 style={{ marginTop: "0" }}>{description}</h4>
              </div>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              minHeight="50px"
              marginTop="2rem"
            >
              <Box
                display="flex"
                alignItems="center"
                border={`1.5px solid ${shades.neutral[500]}`}
                borderRadius="3px"
                mr="12px"
                p="2px 5px"
              >
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="p" sx={{ p: "0 5px" }}>{count}</Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                sx={{
                  backgroundColor: "#222222",
                  color: "white",
                  "&:hover": { backgroundColor: "grey" },
                  borderRadius: 0.8,
                  minWidth: "150px",
                  padding: "10px 40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>
                  <i className="shop icon"></i>
                </span>
                <span className="visible content">Add to Cart</span>
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;
