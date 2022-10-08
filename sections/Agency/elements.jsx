import styled from "styled-components";

import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";


export const Container = styled(({ ...props }) => <SectionContainer {...props} />)`
  flex-direction: column;  
  align-items: center;
  background-image: url("/img/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  
`;

export const StyledVideoWrapper = styled.div`
  width: 100%; 
  height: 100vh;
  background-image: url("/img/video.png");
  background-repeat: no-repeat;
  background-size: contain;  
  
  @media(max-width: 1024px) {
    width: 50%;
    margin: 0 auto;
    
  }

`;

export const StyledHeadTitle = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  text-align: center;
 `;

export const StyledHeadDescription = styled((props) => <SectionSubheading {...props} />)`
  color: black;  
  text-align: center;  
`;

export const StyledMainHeading = styled.div`
  flex-direction: column;
`;

export const StyledAgencyInfoWrapeer = styled.section`
  display: flex;
  flex-direction: row;  
  padding-bottom: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;    
  }
`;

export const StyledCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;


