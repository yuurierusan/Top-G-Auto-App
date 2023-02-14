import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Project = (props) => {
    let { projectId } = useParams()
    const [projectDetails, setProjectDetails] = useState([])

    const getProject = async () => {
        try {
            const response = await axios.get(
                `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
            )
            setGameDetails(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSelectedGame()
    }, [gameId])

    return (
        <div className='game-content'>
            <section className='image-container'>
                <h1>{gameDetails.name}</h1>
                <div>
                    <img src={gameDetails.background_image} alt='game img' />
                </div>
                <h2>Rating: {gameDetails.rating}</h2>
            </section>
            <section className='details'>
                <div className='flex-row space'></div>
                <h5>MetaCritic Score: {gameDetails.metacritic}</h5>
                <h5>Release Date: {gameDetails.released}</h5>
                <div>{gameDetails.description_raw}</div>
            </section>
        </div>
    )
}

export default Project
