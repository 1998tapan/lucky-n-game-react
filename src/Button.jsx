import "./Button.css";

export default function Button({ title = "Re Roll", clickFunc }) {
    return (
        <button className="Button" onClick={clickFunc}>{title}</button>
    )
}