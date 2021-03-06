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

const Ul = styled.ul`
  list-style-type: inherit;
  list-style-position: inside;

`
const Li = styled.li`
`

const Home = () => {

    return (
      <>
        <Title>Welcome to EnoDev Tech Archive! 📱</Title>
        <SubTitle>where you will find extensive resources on Technology and Development!</SubTitle>
        <Heading>Computer Science Theory</Heading>
        <Ul>
          <Li>
            <Link href="https://everythingcomputerscience.com/" target="_blank">EverythingComputerScience</Link><Span>: A useful information about Computer Science such as video lectures, books, and articles.</Span>
          </Li>
        </Ul>
        <Heading>Tech Community</Heading>
        <Link href="https://dev.to/" target="_blank">https://dev.to/</Link><Span>: DEV is a community of software developers getting together to help one another out.</Span>

        <Heading>Test Environment</Heading>
        <Ul>
          <Li>
            <Link href="https://replit.com/" target="_blank">Replit</Link><Span>: The collaborative browser based IDE.</Span>
          </Li>
          <Li>
            <Link href="https://codesandbox.io/" target="_blank">Code Sandbox</Link><Span>: Collaborative sandboxes for rapid web development.</Span>
          </Li>
          <Li>
            <Link href="https://codepen.io/" target="_blank">Codepen</Link><Span>: a social development environment for front-end designers and developers.</Span>
          </Li>
        </Ul>

        <Heading>Front-End</Heading>
        <Paragraph>HTML</Paragraph>
        <Paragraph>CSS</Paragraph>
        <Ul>
          <Li><Link href="https://andybrewer.github.io/mvp/" target="_blank">Mvp CSS</Link><Span>: A minimalist stylesheet for HTML elements</Span></Li>
          <Li><Link href="https://fonts.google.com/" target="_blank">Google Fonts</Link><Span>: Access to 1000+ Google Fonts</Span></Li>
          <Li><Link href="https://fontawesome.com/" target="_blank">Font Awesome</Link><Span>: Access to 1500+ Icons</Span></Li>
          <Li><Link href="https://tailwindcss.com/" target="_blank">TailwindCSS</Link><Span>: A utility-first CSS framework</Span></Li>
          <Li><Link href="https://bulma.io/" target="_blank">Bulma</Link><Span>: A ready-to-use frontend components that you can easily combine to build responsive web interfaces.</Span></Li>
          <Li><Link href="https://html-css-js.com/css/generator/box-shadow/" target="_blank">Box-shadow Generator</Link><Span>: Also offers many cheatsheets for HTML/CSS/JavaScript</Span></Li>
          Box-shadow website:


        </Ul>
        <Paragraph>JavaScript</Paragraph>
        <Paragraph>React</Paragraph>
        
        <Heading>Back-End</Heading>
        <Paragraph>Node.js: open-source backend with JavaScript</Paragraph>
        <Ul>
          <Li><Link href="https://pugjs.org/api/getting-started.html">Pug</Link><Span>: Pug allows you to write inline JavaScript code in your templates. </Span></Li>
        </Ul>
        <Paragraph>Python</Paragraph>
        <Paragraph>Flask</Paragraph>
        <Paragraph><Link href="https://flask.palletsprojects.com/en/2.0.x/">Flask Documentation</Link></Paragraph>
        <Paragraph>Django</Paragraph>
        <Paragraph>ASP.net</Paragraph>

        <Heading>Dev Tools</Heading>
        <Paragraph>Regex</Paragraph>
        <Paragraph><Link href="https://regex101.com/" target="_blank">Regex101</Link><Span>: A collection of most widely used Regex with test environment.</Span></Paragraph>
        <Paragraph><Link href="https://www.regexpal.com/" target="_blank">Regexpal</Link><Span>: A regex test environment.</Span></Paragraph>
        <Heading>Testing</Heading>
        <Heading>Deployment</Heading>


      </>
    );
}

export default Home;