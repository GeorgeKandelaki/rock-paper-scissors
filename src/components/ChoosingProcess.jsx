import styled from "styled-components";
import DetermineWinner from "./DetermineWinner";
import Move from "./Move";

const NodeContainer = styled.div``;

const MoveContainer = styled.div``;

const PlaceholderMove = styled.div`
    padding: 12rem;
    border-radius: 50%;
    background-color: var(--color-dark-blue-500);
`;

const UserText = styled.p`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 2rem;
`;

const HouseText = styled.p`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 2rem;
`;

function ChoosingProcess({ userMove, botMove, onSetBotMove }) {
    return (
        <NodeContainer>
            <UserText>You Picked</UserText>
            <HouseText>The House Picked</HouseText>
            <MoveContainer>
                <Move {...userMove} padding="7.2rem" iconHeight="10rem" iconWidth="10rem" />
            </MoveContainer>
            <DetermineWinner />
            <MoveContainer>
                {botMove && <Move padding="7.2rem" iconHeight="10rem" iconWidth="10rem" />}
                {!botMove && <PlaceholderMove></PlaceholderMove>}
            </MoveContainer>
        </NodeContainer>
    );
}

export default ChoosingProcess;
