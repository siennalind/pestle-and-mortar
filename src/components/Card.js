import AddFavourite from "./AddFavourite"

function Card (props) {
    return (
        <article key={props.id}>
            <p>{props.name}</p>
            <ul>
                <li>{props.firstEffect}</li>
                <li>{props.secondEffect}</li>
                <li>{props.thirdEffect}</li>
                <li>{props.fourthEffect}</li>
            </ul>
            <AddFavourite />
        </article>
    )
}

export default Card