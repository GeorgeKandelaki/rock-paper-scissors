import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* Weights: 600, 700 */

    :root {
        // Primary
        --color-yellow-300:rgba(236, 169, 34, 1);
        --color-yellow-400:rgba(236, 158, 14, 1);

        --color-blue-300:rgba(86, 113, 245, 1);
        --color-blue-400:rgba(72, 101, 244, 1);

        --color-red-300:rgba(221, 64, 93, 1);
        --color-red-400:rgba(220, 46, 78, 1);

        --color-purple-300:rgba(140, 93, 229, 1);
        --color-purple-400:rgba(131, 79, 227, 1) ;

        --color-cyan-300:rgba(82, 190, 209, 1); 
        --color-cyan-400:rgba(64, 185, 206, 1);

        // Neutral
        --text-dark:hsl(229, 25%, 31%);
        --text-score:hsl(229, 64%, 46%);
        --outline-header:hsl(217, 16%, 45%) ;
        --color-white-0: #fff;

        // Background
        --color-dark-blue-500:hsl(237, 49%, 15%);
        --color-dark-blue-600:hsl(214, 47%, 23%);
    }

    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        transition: background-color 0.3s, border 0.3s;

    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: "Ubuntu", sans-serif;
        font-size: 1.6rem;
        line-height: 1;
        min-height: 100vh;
        background: linear-gradient(var(--color-dark-blue-600));
        background-size: cover;
        overflow: hidden;

        transition: color 0.3s, background-color 0.3s;
        
    }

    @media (max-width: 76em){
        html{
            font-size: 50%;
        }
    }
`;

export default GlobalStyles;
