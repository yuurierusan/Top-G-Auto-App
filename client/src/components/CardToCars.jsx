import '../styles/Cards.css'
const CardToCars = (props) => {
    return (
        <div className='card cars-card' onClick={props.onClick}>
            <div className='img-wrapper'>
                <img
                    src='https://www.drifted.com/wp-content/uploads/2021/04/initial-d-ae86.jpg'
                    alt='img'
                />
            </div>
            <div className='info-wrapper flex-col'>
                <h3>Cars</h3>
                <p>Here, There, Everywhere</p>
            </div>
        </div>
    )
}

export default CardToCars
