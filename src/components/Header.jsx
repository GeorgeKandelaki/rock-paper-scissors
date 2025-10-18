import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;
`;
const Headline = styled.p`
    font-size: 3rem;
    color: #fff;
    line-height: 0;
`;
const Score = styled.div``;

function Header() {
    return (
        <StyledHeader>
            <div>
                <Headline>ROCK</Headline>
                <Headline>PAPER</Headline>
                <Headline>SCISSORS</Headline>
            </div>
            <Score>
                <span>score</span>
                <p>12</p>
            </Score>
        </StyledHeader>
    );
}

export default Header;
