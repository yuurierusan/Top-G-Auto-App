import '../styles/cards.css'
const CardToAbout = (props) => {
    return (
        <div className='card about-card' onClick={props.onClick}>
            <div className='img-wrapper'>
                <img
                    src='https://mrclown.tv/wp-content/uploads/2014/11/MC_SightWords-about.jpg'
                    alt='img'
                />
            </div>
            <div className='info-wrapper flex-col'>
                <h3>About</h3>
                <p>Top G Auto</p>
            </div>
        </div>
    )
}

export default CardToAbout
