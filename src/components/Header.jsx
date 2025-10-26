import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 75rem;
    width: 100%;
    padding: 2.7rem 2.4rem;
    border-radius: 1.5rem;
    border: 3px solid var(--outline-header);
`;

const Headline = styled.p`
    font-size: 4rem;
    color: #fff;
    font-weight: 700;
`;

const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #fff;
    padding: 2rem 4.8rem;
    border-radius: 1rem;

    & span {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-score);
    }

    & p {
        font-size: 6.4rem;
        color: var(--text-dark);
        font-weight: 700;
    }
`;

function Header({ score }) {
    return (
        <StyledHeader>
            <div>
                <Headline>ROCK</Headline>
                <Headline>PAPER</Headline>
                <Headline>SCISSORS</Headline>
            </div>
            <Score>
                <span>score</span>
                <p>{score}</p>
            </Score>
        </StyledHeader>
    );
}

export default Header;
