import Button from "./Button"

function Card (props) {
    return (
        <article>
            <p>{props.name}</p>
            <ul>
                <li>{props.firstEffect}</li>
                <li>{props.secondEffect}</li>
                <li>{props.thirdEffect}</li>
                <li>{props.fourthEffect}</li>
            </ul>
            <Button onClick={props.handleClick} text="Favourite" />
        </article>
    )
}

export default Card