import React, { useState, useEffect } from "react";
import Card from "./Card";
export default function Fetchdata() {
    const [data, setData] = useState({
        loading: true,
        movies: [],
    });

    useEffect(() => {
        async function fetchData() {
            const url = "https://api.tvmaze.com/search/shows?q=avengers";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setData({ loading: false, movies: data });
        }
        fetchData();
    }, []);
    if (data.loading) {
        return <div>loading...</div>;
    }
    return (
        <div className="flex flex-row justify-start flex-wrap h-auto w-screen  ">
            {data.movies.map((movie, i) => {
                return (
                    <div key={i}>
                        <Card
                            name={movie?.show?.name}
                            language={movie?.show?.language}
                            runtime={movie?.show?.runtime}
                            date={movie?.show?.premiered}
                            rating={movie?.show?.rating?.average}
                            generes={movie?.show?.generes}
                            countryName={movie?.show?.network?.country?.name}
                            posterImage={movie?.show?.image?.medium}
                        />
                    </div>
                );
            })}
        </div>
    );
}
