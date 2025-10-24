import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import RockPaperScissorsDetail from "./components/RockPaperScissorsDetail";

const moves = [
    {
        name: "rock",
        value: 1,
        icon: "/public/images/icon-rock.svg",
        borderColor: "--color-red-300",
        borderShadow: "rgba(221, 64, 93, 0.6)",
    },
    {
        name: "paper",
        value: 2,
        icon: "/public/images/icon-paper.svg",
        borderColor: "--color-blue-300",
        borderShadow: "rgba(86, 113, 245, 0.6)",
    },
    {
        name: "scissor",
        value: 0,
        icon: "/public/images/icon-scissors.svg",
        borderColor: "--color-yellow-300",
        borderShadow: "rgba(236, 169, 34, 0.6)",
    },
];

const StyledApp = styled.div`
    color: #fff;
    margin-top: 6.4rem;

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
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Header />
                <RockPaperScissorsDetail moves={moves} />
            </StyledApp>
            <Rules>rules</Rules>
        </>
    );
}

export default App;
