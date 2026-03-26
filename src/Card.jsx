function Card({ name, age, city}) {
    return (
        <div className ="card">
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>{city}</p>
        </div>
    )
}

export default Card;