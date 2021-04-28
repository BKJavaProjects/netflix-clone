import axios from  './axios'
import requests from './requests'
import React, {useEffect, useState,} from 'react'

function Banner() {
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrginals); 
            setMovie (
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    
    return (
        <header className = 'banner' 
        style={{
            backgroudSize:"cover", 
            backgroudImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            
            )`,
            backgroundPosition: "center center",
        }}>
            <div  className="banner__contents"> 
                <h1> {movie?.title || movie?.name || movie?.original_name } </h1>
                <div className="banner__buttons">
                    <button className="banner_button" >Play</button>
                    <button className="banner_button">My List</button>
                </div>
            <h1 className="banner_description">{movie?.overview}</h1>
            
            
            
            </div>
            
        </header>
    )
}

export default Banner
