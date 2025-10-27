import styled from "styled-components";

const StyledRules = styled.div`
    background-color: #fff;
    /* padding: 3.2rem 4.8rem; */
    border-radius: 1rem;
`;

const Heading = styled.p`
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 6.4rem;
    color: var(--text-dark);
`;

function Rules() {
    return (
        <StyledRules>
            <Heading>Rules</Heading>
            <img src="/public/images/image-rules.svg" alt="image of the rules" />
        </StyledRules>
    );
}

export default Rules;
