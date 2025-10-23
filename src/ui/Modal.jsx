import { createContext } from "react";

const ModalContext = createContext();

function Modal({ children }) {
    const [openId, setOpenId] = useState("");
    const open = setOpenId;
    const close = () => setOpenId("");

    return <ModalContext.Provider value={{ open, close, openId }}>{children}</ModalContext.Provider>;
}

function Window({ name, onCloseModal, children }) {
    return <div>{children}</div>;
}

function Open({ opens, children }) {
    return <button>{children}</button>;
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
