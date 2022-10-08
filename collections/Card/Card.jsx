// The Card to be exported goes here

import {
    MainContainer,
    StyledIcon,
    HeadTitle,
    MainDescription,
    LeftImageContainer,
    RigthContainer,
} from "./elements"

export const CardInfo = ({ title, description }) => {
    return (
        <MainContainer>
            <LeftImageContainer />              
            <RigthContainer>
                <HeadTitle>{title}</HeadTitle>
                <MainDescription>{description}</MainDescription>
            </RigthContainer>
        </MainContainer>
    )
}