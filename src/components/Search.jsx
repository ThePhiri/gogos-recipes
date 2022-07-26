import styled from "styled-components";
import { useState} from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
       e.preventDefault();
         navigate("/searched/"+input);
    }


  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input onChange={(e)=> setInput(e.target.value)} type="text" placeholder="Search" value={input}/>
            <SubmitButton onClick={submitHandler}> Search</SubmitButton>
        </div>
        
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 10rem;

    div{
        width: 100%;
        position: relative;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 70%;
        margin-right: 1rem;
    }

    svg {
        position: absolute;
        top: 40%;
        left: 2%;
        transform: translate(-50%);
        color: white;
    }

`;

const SubmitButton = styled.button`
    background: linear-gradient(to right, #f27121, #e94057);
    border: none;
    border-radius: 1rem;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background: linear-gradient(35deg, #313131, #494949);
    }
`;

export default Search