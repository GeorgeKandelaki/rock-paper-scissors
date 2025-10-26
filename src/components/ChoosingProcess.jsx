import styled, { css } from "styled-components";
import DetermineWinner from "./DetermineWinner";
import Move from "./Move";
import { useMoves } from "../contexts/MovesContext";
import { useEffect } from "react";

const NodeContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ winner }) => (winner ? "1fr 1fr 1fr" : "1fr 1fr")};
    grid-template-rows: 10rem 1fr;
    align-items: center;
    justify-items: center;
    grid-column-gap: 2.5rem;
    transition: grid-template-columns 0.3s ease; /* optional smooth transition */
`;

const MoveContainerUser = styled.div`
    grid-column: 1 / 2;
`;

const MoveContainerBot = styled.div`
    grid-column: 3 / -1;
`;

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
    grid-column: 1 / 2;
`;

const HouseText = styled(UserText)`
    grid-column: 3 / -1;
`;

function determineWinner(userMove, botMove) {
    let winner;

    // DRAW
    if (userMove === "scissor" && botMove === "scissor") winner = "draw";
    if (userMove === "rock" && botMove === "rock") winner = "draw";
    if (userMove === "paper" && botMove === "paper") winner = "draw";

    // SCISSOR
    if (userMove === "scissor" && botMove === "rock") winner = "bot";
    if (userMove === "scissor" && botMove === "paper") winner = "user";

    // ROCK
    if (userMove === "rock" && botMove === "paper") winner = "bot";
    if (userMove === "rock" && botMove === "scissor") winner = "user";

    // PAPER
    if (userMove === "paper" && botMove === "scissor") winner = "bot";
    if (userMove === "paper" && botMove === "rock") winner = "user";

    return winner;
}

function ChoosingProcess({ userMove, botMove, onSetBotMove, onSetWinner, onChangeScore, onPlayAgain }) {
    // "BIG BRAIN" SOLUTION
    // const rules = {
    //     rock: { rock: "draw", paper: "bot", scissor: "user" },
    //     paper: { rock: "user", paper: "draw", scissor: "bot" },
    //     scissor: { rock: "bot", paper: "user", scissor: "draw" },
    // };
    // winner = rules[userMove][botMove];

    const { moves } = useMoves();
    const winner = userMove && botMove && determineWinner(userMove.name, botMove.name);

    useEffect(
        function () {
            const setBotMove = moves[Math.floor(Math.random() * 3)];
            const timer = setTimeout(() => onSetBotMove(setBotMove), 1500);

            return () => clearTimeout(timer);
        },
        [moves]
    );

    useEffect(() => {
        if (!winner) return; // only run when winner is defined
        onSetWinner(winner);
        onChangeScore((score) => (winner === "user" ? score + 1 : winner === "draw" ? score : score - 1));
    }, [winner]);

    return (
        <NodeContainer winner={winner}>
            <UserText>You Picked</UserText>
            <HouseText>The House Picked</HouseText>
            <MoveContainerUser>
                <Move {...userMove} winner={winner === "user"} padding="7.2rem" iconHeight="10rem" iconWidth="10rem" />
            </MoveContainerUser>
            {winner && <DetermineWinner winner={winner} onPlayAgain={onPlayAgain} />}
            <MoveContainerBot>
                {botMove && (
                    <Move
                        {...botMove}
                        winner={winner === "bot"}
                        padding="7.2rem"
                        iconHeight="10rem"
                        iconWidth="10rem"
                    />
                )}
                {!botMove && <PlaceholderMove></PlaceholderMove>}
            </MoveContainerBot>
        </NodeContainer>
    );
}

export default ChoosingProcess;
