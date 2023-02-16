import '../styles/buttontoabout.css'

const ButtonToAbout = (props) => {
    return (
        <div className='about-button' onClick={props.onClick}>
            <button>About</button>
        </div>
    )
}

export default ButtonToAbout
