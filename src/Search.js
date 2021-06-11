import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            searchRes:[]
        }
    }

    onTrigger(event){
        var prm = new Promise((resolve, reject)=>{
            this.callApi()
        })
        
        prm
        .then(this.props.Callback(this.state.searchRes))
        .then(event.preventDefault())
    }
    callApi() {
        axios({
          method: "get",
          url: "https://newsapi.org/v2/top-headlines",
          params:{
            country: 'ae',
            apiKey:'22cce8f3a1d041e698b4402c2f3b5b93'
          } 
          
        }).then((response) => {
            console.log("Search Res", this.state.searchRes);

          this.setState({ searchRes: response.data.articles })
          console.log("search state", this.state.searchRes);
        }).catch((e) => {
          console.log("error", e);
        })
      }
    render() {

        return (
            <form onSubmit={this.onTrigger}>
                <div class="m-4 input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" />
                    </div>
                    <button type="submit" value = "Submit" class="btn btn-secondary">
                        Search
                    </button>
                </div>
            </form>
        )
    }
}
