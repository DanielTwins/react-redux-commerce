import React, { useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { GridContainer } from "./ProductListStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProducts,
  getProducts,
} from "../../redux/actions/productActions";
import ProductCard from "../ProductCard";

const ProductList = () => {
  /* const products = useSelector((state) => state.allProducts.products); */
  const dispatch = useDispatch();

  /* const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("response data from product list => ", response);
    dispatch(updateProducts(response.data.products));
  }; */

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <GridContainer>
      <ProductCard />
    </GridContainer>
  );
};

export default ProductList;

//? moved the style to a separate file
// styling for the grid
/* const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
`; */
