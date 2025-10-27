import styled from "styled-components";

const StyledRipple = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
`;

const RippleOne = styled(StyledRipple)`
    background-color: rgba(96, 110, 133, 0.15);
    width: 42rem;
    height: 45rem;
    z-index: -1000;
`;

const RippleTwo = styled(StyledRipple)`
    background-color: rgba(96, 110, 133, 0.1);
    width: 60rem;
    height: 60rem;
    z-index: -2000;
`;

const RippleThree = styled(StyledRipple)`
    background-color: rgba(96, 110, 133, 0.05);
    width: 75rem;
    height: 75rem;
    z-index: -3000;
`;

function Ripple({ size }) {
    return (
        <>
            <RippleOne></RippleOne>
            <RippleTwo></RippleTwo>
            <RippleThree></RippleThree>
        </>
    );
}

export default Ripple;
