import { createContext, useContext } from "react";
import rockIcon from "../../public/images/icon-rock.svg";
import paperIcon from "../../public/images/icon-paper.svg";
import scissorsIcon from "../../public/images/icon-scissors.svg";

const MovesContext = createContext();

const moves = [
    {
        name: "rock",
        value: 0,
        icon: rockIcon,
        borderColor: "--color-red-300",
        borderShadow: "rgba(221, 64, 93, 0.6)",
    },
    {
        name: "paper",
        value: 1,
        icon: paperIcon,
        borderColor: "--color-blue-300",
        borderShadow: "rgba(86, 113, 245, 0.6)",
    },
    {
        name: "scissor",
        value: 2,
        icon: scissorsIcon,
        borderColor: "--color-yellow-300",
        borderShadow: "rgba(236, 169, 34, 0.6)",
    },
];

function MovesProvider({ children }) {
    return <MovesContext.Provider value={{ moves }}>{children}</MovesContext.Provider>;
}

function useMoves() {
    const context = useContext(MovesContext);

    if (context === undefined) throw new Error("MovesContext was consumed outside of MovesProvider.");

    return context;
}

export { useMoves, MovesProvider };
