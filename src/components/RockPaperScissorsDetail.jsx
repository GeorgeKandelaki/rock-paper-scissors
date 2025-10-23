import { useState } from "react";
import styled from "styled-components";
import Move from "./Move";

const StyledRockPaperScissorsDetail = styled.div`
    margin-top: 9.6rem;

    display: flex;
    flex-direction: column;
    gap: 6.4rem;

    background: url("/public/images/bg-triangle.svg");
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
`;

const NodeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9.6rem;
`;

function RockPaperScissorsDetail({ moves }) {
    const [chosenMoveUser, setChosenMoveUser] = useState(null);
    const [choseMoveBot, setChosenMoveBot] = useState(null);

    function handleClick(e) {}

    if (chosenMoveUser) return <div>CHOSEENNN</div>;

    return (
        <StyledRockPaperScissorsDetail>
            <NodeContainer>
                {moves.slice(1).map((move) => (
                    <Move
                        moveName={move.name}
                        value={move.value}
                        borderColor={move.color}
                        borderShadow={move.shadow}
                        icon={move.icon}
                        onClick={handleClick}
                        key={move.name}
                    />
                ))}
            </NodeContainer>

            <NodeContainer>
                {moves.slice(0, 1).map((move) => (
                    <Move
                        moveName={move.name}
                        value={move.value}
                        borderColor={move.color}
                        borderShadow={move.shadow}
                        icon={move.icon}
                        onClick={handleClick}
                        key={move.name}
                    />
                ))}
            </NodeContainer>
        </StyledRockPaperScissorsDetail>
    );
}

export default RockPaperScissorsDetail;
