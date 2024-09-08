import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });
    const [submittedData, setSubmittedData] = useState(null);

    const changeName = (e)=>{
     setFormInput({...formInputs,name:e.target.value});
    }
    const changeEmail= (e)=>{
      setFormInput({...formInputs,email:e.target.value});
    }
    const changeAge= (e)=>{
      setFormInput({...formInputs,age:e.target.value});
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      setSubmittedData(true);
      console.log(formInputs);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>User Name </label>
        <input type="text" value={formInputs.name} onChange={changeName} />
  
        <label>Email </label>
        <input type="text" value={formInputs.email} onChange={changeEmail} />
        <label>Age </label>
        <input type="text" value={formInputs.age} onChange={changeAge} />
        {submittedData?<div> name is {formInputs.name} email is {formInputs.email} 
          age is {formInputs.age}
        </div>:null}
        <hr />
        <button type='submit'>Submit</button>

       
        
      </form>
    )
  }