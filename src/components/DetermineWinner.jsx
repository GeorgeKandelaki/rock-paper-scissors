import styled from "styled-components";

const StyledDetermineWinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const Headline = styled.p`
    font-family: inherit;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 4.4rem;
    letter-spacing: 2px;
`;

const PlayAgainButton = styled.button`
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1.8rem 7.2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-weight: 500;

    color: var(--text-dark);
    background-color: #fff;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.5;
    }
`;

function DetermineWinner({ winner, onPlayAgain }) {
    return (
        <StyledDetermineWinner>
            <Headline>{winner === "user" ? "You Win" : winner === "draw" ? "Draw" : "You Lose"}</Headline>
            <PlayAgainButton onClick={() => onPlayAgain()}>Play Again</PlayAgainButton>
        </StyledDetermineWinner>
    );
}

export default DetermineWinner;
