import React, { Component } from "react"; 
import './Lists.css'

class Lists extends Component {  
  constructor(props) {    
    super(props);     
    this.createTasks = this.createTasks.bind(this);  
  }   

  createTasks(item) {    
    return <h2 key={item.key}>{item.text}</h2>
  }   
  
  render() {    
    var todoEntries = this.props.entries;    
    var listItems = todoEntries.map(this.createTasks);     
    
    return (      
      <h2 className="theList">
        <div>      
          {listItems}
        </div>   
      </h2>
      );  
    }
  } 
  
  export default Lists;