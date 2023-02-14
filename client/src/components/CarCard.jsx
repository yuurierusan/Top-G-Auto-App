import '../styles/cards.css'
const CarCard = (props) => {
    return (
        <div className='card car-card' onClick={props.onClick}>
            <div className='img-wrapper'>
                <img src={props.image} alt='img' />
            </div>
            <div className='info-wrapper flex-col'>
                <h3>{props.make}</h3>
                <p>{props.model}</p>
                <p>{props.year}</p>
            </div>
        </div>
    )
}

export default CarCard
