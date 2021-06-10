import React, {Component, useState} from 'react';
import Card from "./Card";
import './Main.css';
import axios from 'axios'
import Result from "./Result";


function Main() {
    const [baseurl, setBaseurl] = useState("http://www.boredapi.com/api/activity?")
    const [ttype, setttype] = useState("")
    const [partic, setpartic] = useState("")
    const [showtype, setshowtype] = useState(true)
    const [showparic, setshowparic] = useState(false)
    const [random, setrandom] = useState(false)
    const [data, setdata] = useState("")
    const [result, setresult] = useState(false)


    const carinfo = [{name: "Cooking", image: "https://img.icons8.com/color/256/000000/chef-cooking.png"},
        {name: "Education", image: "https://img.icons8.com/dusk/256/000000/book-and-pencil.png"},
        {name: "DIY", image: "https://img.icons8.com/dusk/256/000000/hammer.png"},
        {name: "Social", image: "https://img.icons8.com/dusk/256/11111/social-network.png"},
        {name: "Relaxation", image: "https://img.icons8.com/dusk/256/000000/tea--v1.png"},
        {name: "charity", image: "https://img.icons8.com/dusk/256/000000/get-cash.png"},
        {name: "Busy work", image: "https://img.icons8.com/dusk/256/000000/chess-clock.png"},
        {name: "Music", image: "https://img.icons8.com/dusk/256/000000/rockstar.png"},
        {name: "Random", image: "https://img.icons8.com/dusk/256/000000/ask-question.png"}]

    const getype = (type) => {
        console.log(type)
        if (type.name === "Random") {
            setrandom(true)
            getapi()
        } else {
            setttype(type.name.toLowerCase().replace(/\s+/g, ''))
            setshowtype(false)
        }
    }
    const restart = () => {
        setBaseurl("http://www.boredapi.com/api/activity?")
        setttype("")
        setpartic("")
        setshowtype(true)
        setshowparic(false)
        setrandom(false)
        setdata("")
        setresult(false)
    }
    const gepartic = (partic) => {
        setpartic(partic.name)
        getapi()
    }
    const getapi = () => {
        axios({
            method: "get",
            url: baseurl + "type=" + ttype + "&participants=" + partic
        }).then((response) => {
            setdata(response.data)
        })
        setresult(true)
    }
    return (
        <div className={"container-fluid"} style={{textAlign: "center", margin: "1em"}}>
            <div className={showtype && (!random) ? "mytypebefore" : "mytypeafter"}>
                <h1>What should you Do ?</h1>
                <div className={"row"}>
                    {carinfo.map((item, index) => {
                        return <Card name={item} gettype={getype}/>
                    })}
                </div>
            </div>
            <div className={result ? 'mytypeafter' : ""}>
                <div className={showtype ? "mynumbefore" : "mynumbers"}>
                    <h1>How many are you ?</h1>
                    <div className={"row"}>
                        {carinfo.map((item, index) => {
                            return <Card name={{
                                name: index + 1,
                                image: "https://img.icons8.com/dusk/256/000000/" + (index + 1) + "-circle.png/"
                            }} gettype={gepartic}/>
                        })}
                    </div>
                </div>
            </div>
            {}
            {result && !random ?
                <Result activity={data.activity} restart={restart} dis={"dss"}
                        ccs={"myresult"}/> : null}
            {result && random ?
                <Result activity={data.activity} restart={restart} ccs={"myresultrandom"}/> : null}
        </div>
    );

}

export default Main;