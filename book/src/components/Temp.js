import React, { Component } from 'react'
import SearchArea from './SearchArea'
import BookList from './BookList'
import axios from 'axios'
export default class Temp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchFiled: '',
            date: new Date()
        }


    }

    componentDidMount(){
        axios({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=python" 
        }).then((response) => {
            this.setState({ books: [...response.data.items] })
            console.log("res", [...response.data.items]);
        }).catch((e) => {
            console.log("error", e);
        })

        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
}
componentWillUnmount() {
    clearInterval(this.timerID);
  }

  
    handleData = (e) => {
        e.preventDefault();
        axios({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchFiled
        }).then((response) => {
            this.setState({ books: [...response.data.items] })
            console.log("res", [...response.data.items]);
        }).catch((e) => {
            console.log("error", e);
        })

    }
    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({
            searchFiled: e.target.value
        })
    }
    render() {
        return (
            <div className="wrapper">
                <SearchArea handleSearch={this.handleSearch} handleData={this.handleData} />
                <BookList books={this.state.books} />
             <center>
              <footer>
                    
                    <h2>{this.state.date.toLocaleTimeString()}.</h2>
                    
                </footer>
             </center> 
            </div>
        )
    }
}
