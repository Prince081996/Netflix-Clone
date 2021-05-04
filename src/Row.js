import React,{useState, useEffect} from 'react'
import axios from './axios'
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [options, setOptions] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            console.log("movie",request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);
    // console.table(movies)

    useEffect(() => {
        async function fetchApiData(){
            const doctor = []
        //     const promises = new Array(20)
        // .fill()
        // .map((v,i) => fetch("https://emr.api.meddo.tech/api/v1/emr/patient/all-doctors"))
        // Promise.all(promises).then((doctorArr) => { 
        //     return doctorArr.map(res => 
        //         res.json().then(({doctors}) => 
        //           doctor.push({doctors})
        //     )          
        //     );      
        // });
        // setOptions(doctor)
            const request = await axios.get("https://emr.api.meddo.tech/api/v1/emr/patient/all-doctors")
            doctor.push(request.data._embedded.doctors.map((v) => v.name))
            // console.log(request.data._embedded.doctors.map((v) => v.name));
            setOptions(doctor)
            return request
        }
        fetchApiData();
    }, []);
    console.log(options)
    return (
       <div className="row">
    
            <h2>{ title }</h2>
            <div className="row_posters">
                { /* several row posters */}
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src = {`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        
        </div>
    )
}

export default Row
