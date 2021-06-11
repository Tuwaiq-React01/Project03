import React from 'react'
import Article from '../Article'

export default function News(props) {

  var articles =[]
  console.log('at news ', props.data)
  if(props.data != undefined){
    articles = props.data.map((artcl)=>{
      return(
        // <Article title={artcl.title}/> source={artcl.provider.name} 
        <Article title={artcl.title} content={artcl.description} source={artcl.provider.name} date={artcl.datePublished} img={artcl.image.url} url={artcl.url}/>
        )
    })
  }else{
    articles = <h6>Loading...</h6>
  }
  return (
    <div class="container">
      {articles}
    </div>
)
}
