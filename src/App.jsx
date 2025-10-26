import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import RockPaperScissorsDetail from "./components/RockPaperScissorsDetail";
import { MovesProvider } from "./contexts/MovesContext";
import { useState } from "react";

const StyledApp = styled.div`
    color: #fff;
    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Rules = styled.button`
    position: absolute;
    right: 1%;
    bottom: 2%;
    cursor: pointer;

    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: transparent;
    border-radius: 0.8rem;
    border: 1px solid #fff;
    color: #fff;
    padding: 1.5rem 4.8rem;
    transition: all 0.3s;

    &:hover {
        opacity: 0.5;
    }
`;

function App() {
    const [score, setScore] = useState(12);

    return (
        <>
            <GlobalStyles />
            <MovesProvider>
                <StyledApp>
                    <Header score={score} />
                    <RockPaperScissorsDetail onChangeScore={setScore} />
                </StyledApp>
                <Rules>rules</Rules>
            </MovesProvider>
        </>
    );
}

export default App;
