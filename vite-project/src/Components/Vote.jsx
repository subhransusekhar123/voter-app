import axios from 'axios'
import React,{ useState,useEffect } from 'react'

const Vote = () => {
    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get('https://dry-reef-16810.herokuapp.com/vote')
        .then((res)=>{
            setstate(res.data)
        })
    }, [])
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
        state.map((data,index)=>{
            return (
                <>
                     <tr>
                            <th scope="row">{index}</th>
                            <td>{data.name}</td>
                            <td>{data.upvote}</td>
                            <td>{data.downvote}</td>
                      </tr>
                </>
            )
        })
    }
   
   
  </tbody>
</table>
    </div>
  )
}

export default Vote