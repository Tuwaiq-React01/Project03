import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
import { Link } from 'react-router-dom'

export default function Discover() {
    const [discover, setDiscover] = useState([]);
    useEffect(() => {
        callApi()
    }, [])
    const callApi = () => {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
            params: {key: '484129036', locale: 'en-US'},
            headers: {
              'x-rapidapi-key': 'f7f1da0299mshb6e8069126675b5p14e502jsn3f66eae4ec4f',
              'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setDiscover(response.data.tracks)
        }).catch(function (error) {
            console.error(error);
        });
    }
    let newDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let cards = discover.map((track, i) => (
        <div key={i} className="cards">
            <div className="cards-img relative" style={{
                backgroundImage: "url(" + track.images.background + ")"
            }}>
            </div>
            <div className="p-2">
                <div className="h-4 filter blur-md z-0 bg-cover"
                    style={{ backgroundImage: "url(" + track.images.coverart + ")" }}>
                </div>
                <div className="flex my-auto gap-4 z-10 -mt-2">
                    <div className="text-2xl font-extrabold pl-2">{i + 1}</div>
                    <div className="cards-info z-10">
                        <h1><a href={track.url}>{track.title}</a></h1>
                        <h5>{track.subtitle}</h5>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div className="overflow-hidden bg-white grid grid-cols-5 mx-auto w-5/6 mt-4 shadow-lg border border-gray-100 rounded-2xl">
              <div>
                <UserInfo />
            </div>
            <div className="border-l border-gray-100 col-span-4">
                <div className="pl-2">
                    <div className="mx-2 mt-4 sm:mx-4 sm:mb-16 mb-8 flex items-baseline justify-between">
                        <div>
                            <h1 className="text-3xl font-extrabold ">Discover</h1>
                        </div>
                        <div className="font-semibold">
                            Week of <span className="underline text-indigo-600">{monthNames[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear()}</span>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-8 sm:gap-12">
                        {cards}
                    </div>
                </div>
            </div>
        </div>

    )
}
