import React,{useState} from 'react'
import "./profile.css";
import axios from 'axios';

const Datas = ({pro}) => {
  const [state, setstate] = useState(1)


    const clickHandler = (da) => {
        setstate(state+1)
        axios.put(`https://dry-reef-16810.herokuapp.com/vote/${da.name}`,{upvote:state})
        .then((res)=>{alert(`vote to ${da.name} `)})
    }

    const secondClickHandler = (da) => {
      setstate(state-1)
        axios.put(`https://dry-reef-16810.herokuapp.com/vote/${da.name}`,{downvote:state})
        .then((res)=>{
            alert(`downvote to ${da.name} `)
        })
    }

    http://localhost:4000/vote/subhransu

  return (
    <div>
           <div className="d-flex vote">
                <span><img src={pro.file} alt="" width="100px" height="100px"/></span>
                <h2>{pro.name}</h2>
                <span>upvote</span>
                <button className="btn btn-primary" onClick={()=>clickHandler(pro)}>upVote</button>
                <span>downvote</span>
                <button className="btn btn-danger" onClick={()=>secondClickHandler(pro)}>downVote</button>
            </div>
    </div>
  )
}

export default Datas;