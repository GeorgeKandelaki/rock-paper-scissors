import styled from "styled-components";

const StyledMove = styled.div`
    padding: 4rem;
    border-radius: 50%;
    background-color: #fff;
    border: 2.5rem solid var(${(props) => props.borderColor});
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.15) inset, 0 0.8rem 0 0.2rem ${(props) => props.borderShadow};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.div`
    width: 100%;

    & img {
        width: 7rem;
        height: 7rem;
    }
`;

function Move({ moveName, value, onClick, borderColor, borderShadow, icon = "" }) {
    return (
        <StyledMove onClick={() => onClick?.()} borderColor={borderColor} borderShadow={borderShadow}>
            <Icon>
                <img alt={moveName} src={icon} />
            </Icon>
        </StyledMove>
    );
}

export default Move;
