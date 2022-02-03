import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Title = styled.div`
font-size: 3em;
`;

const SubTitle = styled.div`
font-size: 1.5em;
margin-bottom: 1em;
`;

const Heading = styled.div`
font-size: 1.5em;
padding: 2px;
border-bottom: 1.5px solid #000;
margin-bottom: .5em;
`;

const Paragraph = styled.div`
font-size: 1em;
`;

const Span = styled.span`
font-size: 1em;
`;

const Link = styled.a`
  color: #0070f3;
`;


const Home = () => {

    return (
      <>
        <Title>Welcome to EnoDev Tech Archive! 📱</Title>
        <SubTitle>where you will find extensive resources on Technology and Development!</SubTitle>
        <Heading>Tech Community</Heading>
        <Link href="https://dev.to/" target="_blank">https://dev.to/</Link><Span>: DEV is a community of software developers getting together to help one another out.</Span>

        <Heading>Test Environment</Heading>
        <Paragraph><Link href="https://replit.com/" target="_blank">Replit</Link><Span>: The collaborative browser based IDE</Span></Paragraph>

        <Heading>Front-End</Heading>
        <Paragraph>HTML</Paragraph>
        <Paragraph>CSS</Paragraph>
        <Paragraph><Link href="https://fonts.google.com/" target="_blank">Google Fonts</Link><Span>: Access to 1000+ Google Fonts</Span></Paragraph>
        <Paragraph><Link href="https://fontawesome.com/" target="_blank">Font Awesome</Link><Span>: Access to 1500+ Icons</Span></Paragraph>
        <Paragraph><Link href="https://tailwindcss.com/" target="_blank">TailwindCSS</Link><Span>: A utility-first CSS framework</Span></Paragraph>
        
        <Paragraph>JavaScript</Paragraph>
        <Paragraph>React</Paragraph>
        
        <Heading>Back-End</Heading>
        <Paragraph>Node.js: open-source backend with JavaScript</Paragraph>
        <Paragraph>Python</Paragraph>
        <Paragraph>Flask</Paragraph>
        <Paragraph><Link href="https://flask.palletsprojects.com/en/2.0.x/">Flask Documentation</Link></Paragraph>
        <Paragraph>Django</Paragraph>
        <Paragraph>ASP.net</Paragraph>

        <Heading>Dev Toolkits</Heading>
        <Paragraph>Regex</Paragraph>
        <Paragraph><Link href="https://regex101.com/" target="_blank">Regex101</Link><Span>: A collection of most widely used Regex with test environment.</Span></Paragraph>
        <Paragraph><Link href="https://www.regexpal.com/" target="_blank">Regexpal</Link><Span>: A regex test environment.</Span></Paragraph>

      </>
    );
}

export default Home;