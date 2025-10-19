import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* Weights: 600, 700 */

    :root {
        // Primary
        --color-yellow-300:hsl(40, 84%, 53%);
        --color-yellow-400:hsl(39, 89%, 49%);

        --color-blue-300:hsl(230, 89%, 65%);
        --color-blue-400:hsl(230, 89%, 62%);

        --color-red-300:hsl(349, 70%, 56%);
        --color-red-400:hsl(349, 71%, 52%);

        --color-purple-300:hsl(261, 72%, 63%);
        --color-purple-400:hsl(261, 73%, 60%) ;

        --color-cyan-300:hsl(189, 58%, 57%); 
        --color-cyan-400:hsl(189, 59%, 53%);

        // Neutral
        --text-dark:hsl(229, 25%, 31%);
        --text-score:hsl(229, 64%, 46%);
        --outline-header:hsl(217, 16%, 45%) ;
        --color-white-0: #fff;

        // Background
        --color-dark-blue-500:hsl(237, 49%, 15%);
        --color-dark-blue-600:hsl(214, 47%, 23%);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: "Ubuntu", sans-serif;
        font-size: 1.6rem;
        line-height: 1;
        min-height: 100vh;
        background: linear-gradient(var(--color-dark-blue-500));
        background-size: cover;
    }
`;

export default GlobalStyles;
