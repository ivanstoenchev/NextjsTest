// Styled elements for the Card go here
import styled from "styled-components";

 
export const MainContainer = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 140px;
    border-radius: 15px;
    background-color: #f4f4f4;
    margin: 20px;
    padding: 13px;
    

    &:hover {
        outline: 2px solid #388cf9;
        cursor: pointer;
       
        h2 {
      color: #388cf9;
      text-decoration: underline;
    }
    }
    @media(max-width:1024px){
        width: 50%;
        margin: 10px auto;
    }
`;

export const StyledIcon = styled.div`
    width: 20px;
`;

export const HeadTitle = styled.h2`
    color: black;
    font-weight: bold;    
`;

export const MainDescription = styled.p`
    color: black;
    font-size: 20px;
`;

export const RigthContainer = styled.section`
    flex-direction: column;
`;

export const LeftImageContainer = styled.section`
    background-image: url("/img/people-group-solid.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 20%;
    margin: 20px;    
`;