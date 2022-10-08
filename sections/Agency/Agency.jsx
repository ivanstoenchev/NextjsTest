import { CardInfo } from "../../collections/Card/Card"

import {
  Container,
  StyledMainHeading,
  StyledHeadTitle,
  StyledHeadDescription,
  StyledVideoWrapper,
  StyledCardWrapper,
  StyledAgencyInfoWrapeer,
} from "./elements";

const agencyInfo =
  [
    {
      id: 1,      
      title: "Brief",
      description: (
        <>
          Complete <strong>brief writing or simple guidance</strong> on what to include, we`ve got you covered.
        </>
      ),

    },
    {
      id: 2,      
      title: "Search",
      description: (
        <>
          In-depth agency search covering; <strong>criteria matching,</strong> door knocking and due-dilligence vetting.
        </>
      ),
    },
    {
      id: 3,      
      title: "Pitch",
      description: (
        <>
          Comprehensive <strong>pitch management,</strong> including comms, diary management and pitch hosting.
        </>
      ),

    },
  ];

export const Agency = ({ title, description }) => {
  return (
    <Container>
      <StyledMainHeading>
        <StyledHeadTitle>{title}</StyledHeadTitle>
        <StyledHeadDescription>{description}</StyledHeadDescription>
      </StyledMainHeading>
      <StyledAgencyInfoWrapeer>
        <StyledVideoWrapper />
        <StyledCardWrapper>
          {agencyInfo.map((card) => (
            <CardInfo
              key={card.id}              
              title={card.title}
              description={card.description}
            />
          ))}
        </StyledCardWrapper>
      </StyledAgencyInfoWrapeer>
    </Container>
  );
};
