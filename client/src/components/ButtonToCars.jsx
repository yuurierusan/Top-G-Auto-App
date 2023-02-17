import '../styles/buttontocars.css'

const ButtonToCars = (props) => {
    return (
        <div className='car-button' onClick={props.onClick}>
            <button className='cars-button'>Cars</button>
        </div>
    )
}

export default ButtonToCars
