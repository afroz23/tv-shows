import React from "react";
export default function Card(props) {
    const date = JSON.stringify(props.date);
    let tarikh = date[9] + date[10];
    let month = date[6] + date[7];
    let year = date[1] + date[2] + date[3] + date[4];
    if (month === "01") {
        month = "Jan";
    } else if (month === "02") {
        month = "Feb";
    } else if (month === "03") {
        month = "Mar";
    } else if (month === "04") {
        month = "Apr";
    } else if (month === "05") {
        month = "May";
    } else if (month === "06") {
        month = "Jun";
    } else if (month === "07") {
        month = "Jul";
    } else if (month === "08") {
        month = "Aug";
    } else if (month === "09") {
        month = "Sep";
    } else if (month === "10") {
        month = "Oct";
    } else if (month === "11") {
        month = "Nov";
    } else if (month === "12") {
        month = "Dec";
    }

    return (
        <div className="flex flex-col justify-center align-middle  bg-gray-300 m-3 rounded-lg">
            <div className="max-w-sm bg-center rounded overflow-hidden shadow-lg m-3 w-48 h-60 hover:scale-110">
                <div>
                    <img
                        className="object-cover h-48 w-full "
                        src={
                            props.posterImage
                                ? props.posterImage
                                : "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
                        }
                        alt="poster"
                    />
                </div>

                <h1>
                    {props.countryName ? props.countryName : "United States"}
                </h1>
            </div>
            <div>Language: {props.language}</div>
            <div>Runtime: {props.runtime}</div>
            <div>
                {tarikh}th {month}, {year}
            </div>
            <div>rating: {props.rating ? props.rating : "8.0"}</div>
            <div>
                <button className="mb-3 w-48 center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    {props.name}
                </button>
            </div>
        </div>
    );
}
