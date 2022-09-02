import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Filter = styled.div`
  margin: 20px;
`;
const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter1</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default ProductList;
