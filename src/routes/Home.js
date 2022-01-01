import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Title = styled.div`
font-size: 3em;
`;

const SubTitle = styled.div`
font-size: 1.5em;
`;


const Home = () => {

    return (
      <>
        <Title>Welcome to EnoDev Tech Archive! 📱</Title>
        <SubTitle>where you will find extensive resources on Technology and Development!</SubTitle>
      </>
    );
}

export default Home;