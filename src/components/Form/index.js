import styled from "styled-components";

const Input  = styled.input`
    padding: 10px;
    max-width: 1360px;
    width: 100%;
    margin-top: 37px; 
    cursor: text;
    background: #53585D;
    color: var(--white);
    border: none;
    border-radius: 4px;
    &:focus{
        border-bottom: 3px solid red;
    }

`;

const Select = styled.select`
    padding: 10px;
    max-width: 1360px;
    width: 100%;
    margin-top: 37px; 
    cursor: text;
    background: #53585D;
    color: var(--white);
    border: none;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    padding: 40px;
    max-width: 1360px;
    width: 100%;
    margin-top: 37px; 
    cursor: text;
    background: #53585D;
    color: var(--white);
    border: none;
    border-radius: 4px;
`;


export  {Input, Select, Textarea};
