import { useState } from "react";
import styled from "styled-components";
import Move from "./Move";
import ChoosingProcess from "./ChoosingProcess";
import { useMoves } from "../contexts/MovesContext";

const StyledRockPaperScissorsDetail = styled.div`
    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    gap: 6.4rem;

    ${(props) =>
        props.determiningWinnerProcess
            ? ""
            : `
    background: url("/public/images/bg-triangle.svg");
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    `}
`;

const NodeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12.8rem;
`;

function RockPaperScissorsDetail({ onChangeScore }) {
    const { moves } = useMoves();
    const [winner, setWinner] = useState(null);
    const [userMove, setUserMove] = useState(null);
    const [botMove, setBotMove] = useState(null);

    function resetState() {
        setWinner(null);
        setUserMove(null);
        setBotMove(null);
    }

    return (
        <StyledRockPaperScissorsDetail determiningWinnerProcess={Boolean(userMove)}>
            {userMove ? (
                <ChoosingProcess
                    userMove={userMove}
                    botMove={botMove}
                    onSetBotMove={setBotMove}
                    onSetWinner={setWinner}
                    onChangeScore={onChangeScore}
                    onPlayAgain={resetState}
                />
            ) : (
                <>
                    <NodeContainer>
                        {moves.slice(1).map((move) => (
                            <Move
                                moveName={move.name}
                                borderColor={move.borderColor}
                                borderShadow={move.borderShadow}
                                icon={move.icon}
                                onClick={() => setUserMove(move)}
                                key={move.name}
                            />
                        ))}
                    </NodeContainer>

                    <NodeContainer>
                        {moves.slice(0, 1).map((move) => (
                            <Move
                                moveName={move.name}
                                borderColor={move.borderColor}
                                borderShadow={move.borderShadow}
                                icon={move.icon}
                                onClick={() => setUserMove(move)}
                                key={move.name}
                            />
                        ))}
                    </NodeContainer>
                </>
            )}
        </StyledRockPaperScissorsDetail>
    );
}

export default RockPaperScissorsDetail;
