import React, {useState,useEffect } from 'react'
import SearchArea from './SearchArea'
import BookList from './BookList'
import Headers from './Headers'
import axios from 'axios'

export default function Book1(props) {

    const [books, setbooks] = useState([])
    const [searchFiled, setSearchFiled] = useState('')
    const [date, setdate] = useState(new Date())


    useEffect(() => {
        axios({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=python" 
        }).then((response) => {
            setbooks([...response.data.items])
           // this.setState({ books: [...response.data.items] })
            console.log("res", [...response.data.items]);
        }).catch((e) => {
            console.log("error", e);
        })

        const timerID = setInterval(
            () => tick(),
            1000
          );
        
    }, [])

   const tick =()=> {
    setdate(new Date())
        // this.setState({
        //   date: new Date()
        // });
      }

      const  handleData = (e) => {
        e.preventDefault();
        axios({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + searchFiled
        }).then((response) => {
            setbooks([...response.data.items])
          
            console.log("res", [...response.data.items]);
        }).catch((e) => {
            console.log("error", e);
        })

    }

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearchFiled(e.target.value)
        // this.setState({
        //     searchFiled: e.target.value
        // })
    }

     return (
            <div className="wrapper">
                <Headers/>
                <SearchArea handleSearch={handleSearch} handleData={handleData} />
                <BookList books={books} />
             <center>
              <footer>
                    
                    <h2>{date.toLocaleTimeString()}.</h2>
                    
                </footer>
             </center> 
            </div>
        )
}
