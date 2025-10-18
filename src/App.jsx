import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import RockPaperScissors from "./components/RockPaperScissorsDetail";

const StyledApp = styled.div`
    background-color: var(--color-dark-blue-500);
    color: #fff;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Header />
                <RockPaperScissors />
            </StyledApp>
        </>
    );
}

export default App;
