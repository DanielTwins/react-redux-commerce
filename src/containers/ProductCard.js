import React from "react";
import { shades } from "../theme"; 
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
import styled from "styled-components"; 
import Loading from '../components/Loading'

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products); // get the products from the global redux store

  // check if products array is empty, and if so, display the loading component
  if (!products || products.length === 0) {
    return <Loading />
  }

  // map through the products array to render a list of product cards
  const renderList = products.map((product) => {
    const { id, title, thumbnail, price, category } = product; // destructuring the product object to get specific properties

    // return a Link component that redirects to the product page when clicked
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <CardContainer>
            <img src={thumbnail} alt={title} />
            <div className="detail">
              <h3>{title}</h3>
              <p>
                Price: <strong> ${price}</strong>
              </p>
              <span>
                Category: <strong>{category}</strong>
              </span>
            </div>
          </CardContainer>
        </Link>
      </div>
    );
  });

  // display the list of product cards
  return <>{renderList}</>;
};

export default ProductCard;

// styled-components styles for the product card container
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .detail {
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${shades.primary[500]}; 
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
    color: ${shades.secondary[500]};
  }

  span {
    font-size: 14px;
    font-style: italic;
    color: ${shades.primary[300]};
  }
`;
