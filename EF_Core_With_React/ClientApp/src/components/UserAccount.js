import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserAccount() {
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState({})
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [id, setId] = useState(localStorage.getItem("id"))

    const [isEditing, setIsEditing] = useState(false)


    useEffect(() => {
        callApi()
    }, [edit])

    const callApi = () => {
        axios({
            method: "get",
            url: `https://localhost:5001/UserAccounts/${id}` // id
            //   localStorage.getItem("picture");
        }).then((response) => {
            if (response.status == 200)
                setUser(response.data[0])
            user.name = name
            user.Id = id;
            // const u = { "Id": id, "Username": name, "userAccount": user }

            setName(response.data[0].name)
            setDate(response.data[0].dateOfBirth)
            console.log(name)
        }).catch((e) => {
            console.log("error", e);
        });
    };


    const taglleEdit = () => {
        setIsEditing(!edit)
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleDateChange = (event) => {
        console.log(event.target.value)
        setDate(event.target.value);
    }

    const Updating = (user) => {
        user.Username = name
        user.Id = id;
        user.dateOfBirth =  date;
        const u = { "Id": id, "Name": name, "userAccount": user }
        localStorage.setItem("i", JSON.stringify(u))
        console.log(JSON.stringify(u))
        axios.post('https://localhost:5001/UserAccounts/EditAccount/' + id, (u))
            .then((response) => {
                console.log(response)
                // setGame(response )
            }).catch((e) => {
                console.log("error", e);
            });
    }

    user.Id = id;
    const u = { "Id": id, "Name": name, "userAccount": user }
    return (
        <div>
            <br></br>
            <br></br>

            <div className="board" >


                <form className="row g-3" onSubmit={() => Updating(user)} method="put">
                    {/* <form className="row g-3"> */}

                    <div className="col-12">
                        <label hidden htmlFor="id" asp-for="int" className="form-label"></label>
                        <input hidden type="text"
                            className="form-control" id="id" placeholder={user.id} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Name</label>
                        <input type="text"
                            readOnly={isEditing ? false : true}
                            className="form-control" id="inputAddress" placeholder={user.name} onChange={(event) => handleChange(event)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" readOnly={true} className="form-control" id="inputEmail4" placeholder={user.email} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" readOnly={isEditing ? false : true} className="form-control" id="inputPassword4" value="******************" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputDate" className="form-label">Date Of Birth</label>
                        
                        <input type={isEditing ? "date" : "text"} readOnly={isEditing ? false : true} className="form-control" id="inputDate" placeholder={date.substring(0,10)} onChange={(event) => handleDateChange(event)} />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Joining Date </label>
                        <input type="text" readOnly="" className="form-control" id="inputCity" placeholder={user.joiningDate} />
                    </div>

                    {isEditing ?
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary"> Submit</button>
                        </div>
                        : <div className="col-12">
                            <a className="btn btn-light" style={{ color: "#201641" }} onClick={() => taglleEdit()} >Update</a>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}
//