import { useState, useEffect } from 'react'

const Home = () => (
    <div>
        <div className='genres'>
            <h1>Genres</h1>
            <section className='container-grid'>
                {genres.map((genre) => (
                    <div key={genre.id}>
                        <Link to={`/view/games/${genre.id}`}>
                            <GenreCard
                                name={genre.name}
                                image={genre.image_background}
                                gamesCount={genre.games_count}
                            />
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    </div>
)
