import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;`;
const Title = styled.h1`
font-weight:300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type==="filled"&& "none"};
background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
color: ${props=>props.type==="filled"&& "white" };
`;


const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const TopTexts = styled.h1``;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px ;
`;
const Info = styled.div`
flex:3;

`;
const Summary = styled.div`
flex:1;
background-color: red;
border:0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

`;
const Product = styled.div`
display: flex;
justify-content: space-between;

`;
const ProductDetail = styled.div`
flex:2;
display: flex;
`;
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Image = styled.img``;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
`;
const ProductSize = styled.span`

`;
const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;

`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductPrices = styled.div`
font-size: 30px;
font-weight: 200;
`;
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;

`;
const SummaryTitle = styled.h1`
font-weight: 200;

`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "500"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width:100%;
padding: 10px;
background-color: black ;
color:white;
font-weight: 600;
`;
const Cart = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>
                        Shopping Bag(2)
                    </TopText>
                    <TopText>
                        Your wishlist (0)
                    </TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image  src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                       <Details>
                        <ProductName> <b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                        <ProductID> <b>ID:</b> 987654356</ProductID>
                        <ProductColor color="black"/>
                        <ProductSize> <b>Size:</b> 37.5</ProductSize>
                       </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrices>$3</ProductPrices>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image  src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                       <Details>
                        <ProductName> <b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                        <ProductID> <b>ID:</b> 987654356</ProductID>
                        <ProductColor color="black"/>
                        <ProductSize> <b>Size:</b> 37.5</ProductSize>
                       </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrices>$3</ProductPrices>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image  src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                       <Details>
                        <ProductName> <b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                        <ProductID> <b>ID:</b> 987654356</ProductID>
                        <ProductColor color="black"/>
                        <ProductSize> <b>Size:</b> 37.5</ProductSize>
                       </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrices>$3</ProductPrices>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
export default Cart;