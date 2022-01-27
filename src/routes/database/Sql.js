import React,{useState, useEffect} from "react";
import styled from "styled-components";
import MarkdownPreview from '@uiw/react-markdown-preview';

const Div = styled.div`
  position: absolute;

`;

const Sql = () => {
  const file_name = 'sql.md';
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`../../markdowns/${file_name}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setMarkdown(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  });
    return (
        <Div>
            <MarkdownPreview source={markdown} />
        </Div>
    );
}

export default Sql;