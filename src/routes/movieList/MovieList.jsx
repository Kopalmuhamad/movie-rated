import React, { useEffect, useState } from 'react';
import './MovieList.css';
import { Card } from '../../components/IndexComponent';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MovieList = ({ config }) => {
    const [data, setData] = useState([]);
    const { initialUrl, pageTitle } = config;
    const location = useLocation()

    const apiKey = '22a2c0e5202c1ebb2a1be51db2ca6eac';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `https://api.themoviedb.org/3/${initialUrl}?api_key=${apiKey}`;

                const response = await axios.get(apiUrl);
                setData(response.data.results);
            } catch (error) {
                console.error('Error Fetching Data:', error);
            }
        };

        fetchData();
    }, [initialUrl, location.pathname]);

    return (
        <section className="route">
            <main className="route__container container">
                <h1 className="page-title">{pageTitle}</h1>
                <div className="card-container">
                    {data.map((movie, index) => (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            text={"Show More"}
                            overview={movie.overview}
                            rated={movie.vote_average}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}

export default MovieList;
