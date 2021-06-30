import React,{useState,useEffect} from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function Popup() {
const [isOpen, setisOpen] = useState(false)
const [title, settitle] = useState("")
const [image, setimage] = useState("")
const [postArray, setpost] = useState([])

const popupShow =()=>{
    setisOpen(true)
}
const popupHide =()=>{
    setisOpen(false)
}
const handelChange = (e)=>{
console.log(e.target.value)
settitle(e.target.value)
}

const handelImage = (e)=>{
    console.log(e.target.value)
    setimage(e.target.value)
    }
    const addPost = ()=>{
        setisOpen(false)
        const Component = postArray
        Component.push({title: title,image:image})
        setpost(Component)
    }
    
    return (
        <div>
            <button  onClick={popupShow}> add a post</button>

          {postArray.map((item,i)=>{
            return  <Post key={i} title={item.title} img={item.image}/>
          })}
            <Modal
          isOpen={isOpen}
          onAfterOpen={false}
          onRequestClose={popupHide}
          contentLabel="Add a post"
        >
            <label>Enter the title</label>
            <input type="text" onChange={handelChange}  />
            <label>Enter url</label>
            <input type="text" onChange={handelImage}  />
            <button onClick={addPost}> add </button>

        </Modal>
            
        </div>
    )
}
