const CarsCard = (props) => {
    return (
        <div className='card car-card' onClick={props.onClick}>
            <div className='img-wrapper'>
                <img
                    src='https://mrclown.tv/wp-content/uploads/2014/11/MC_SightWords-about.jpg'
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

export default CarsCard
