import styled from "styled-components";
import rulesImage from "../../public/images/image-rules.svg";

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
            <img src={rulesImage} alt="image of the rules" />
        </StyledRules>
    );
}

export default Rules;
