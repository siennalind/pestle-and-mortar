function Button (props) {
    const myClass = `button ${props.type}`
    return (
        <button className={myClass} onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export default Button