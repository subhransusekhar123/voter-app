import React,{useState} from 'react'
import axios from 'axios'

const Form = () => {

    const [state, setstate] = useState("")
    const [name,setName] = useState({
        name:"",
       
        
    })



    const changeHandler = (e) =>{
        
        setstate(e.target.files[0])
        console.log(state)
    }

    const nameChangeHandler = (e) =>{
        setName({...name,[e.target.name]:e.target.value})
    }

    const configAxios = {
        headers: {
            'content-type': 'multipart/form-data',
        }
    }

    const data = new FormData() 
    
    console.log(data)

    const vote_fun = () => {
        axios.post('https://dry-reef-16810.herokuapp.com/vote',{name:name.name}).then(res=>{
            console.log("data posted1",res)
        }).catch(err=>{
            console.log('data not ',err)
        })

    }

    const clickHandler =async (e) =>{
        
        e.preventDefault()
        data.append("file",state)
        data.append("name",name.name)
        
        await axios.post('https://dry-reef-16810.herokuapp.com/Api',data,configAxios).then(
            vote_fun()
        ).then(()=>{
            
        })
        .catch(err=>{
            console.log('data not ',err)
        })
       

       


        
        console.warn(state,name)
    }


  return (
    <div className='container'>
        <form>

        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' onChange={nameChangeHandler}/>
   
  </div>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">upload image</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='file' onChange={changeHandler}/>
  </div>

  

  <button type="submit" class="btn btn-primary" onClick={clickHandler}>Submit</button>
</form>
    </div>
  )
}

export default Form