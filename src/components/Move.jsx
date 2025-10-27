import styled from "styled-components";
import Ripple from "./Ripple";

const StyledMove = styled.div`
    padding: ${(props) => props.padding};
    border-radius: 50%;
    background-color: #fff;
    border: 2.5rem solid var(${(props) => props.borderColor});
    box-shadow: 0 1rem rgba(0, 0, 0, 0.15) inset, 0 0.8rem 1px 2px ${(props) => props.borderShadow};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Icon = styled.div`
    width: 100%;

    & img {
        width: ${(props) => props.iconWidth};
        height: ${(props) => props.iconsHeight};
    }
`;

function Move({
    winner,
    moveName,
    onClick,
    borderColor,
    borderShadow,
    icon = "",
    padding = "4rem",
    iconWidth = "7rem",
    iconHeight = "7rem",
}) {
    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                boxShadow: "0 0 0 0 rgba(0,0,0,1)",
                borderRadius: "50%",
            }}
        >
            {winner && <Ripple />}
            <StyledMove
                onClick={() => onClick?.()}
                borderColor={borderColor}
                borderShadow={borderShadow}
                padding={padding}
            >
                <Icon iconWidth={iconWidth} iconHeight={iconHeight}>
                    <img alt={moveName} src={icon} />
                </Icon>
            </StyledMove>
        </div>
    );
}

export default Move;
