import React,{useState} from 'react';
import './db.css';
function DB_connect() 
{
    const [FormData, setFormData] = useState({
        name:'',
        email:'',
        message:''
});
const [status, setStatus]= useState(
    {
    type:'',
    msg:''
}
);
const[fetchData, setFetchData] = useState(false);
const handleInputData=(e)=>
    {
        const{name,value}=e.target;
        setFormData(
            (prev) => ({
            ...prev,
            //name: value is replaced with [name]: value to dynamically update the corresponding field in the FormData state based on the input's name attribute.
            [name]: value  
        }
    ));
    };
const handleSubmit=async(e)=>
    {
        e.preventDefault();
        fetchData(true);
        setStatus({
            type:'',
            msg:''
        });  
        try{
        const response =await fetch('',{
            method:'POST',
            headers:{
                'Content-Type':'application/json' 
             },
             body:JSON.stringify(FormData)
        });
        const result=await response.json();
        if(response.ok){
            setStatus({type:"success",msg:"forms submitted successfully"});
            setFormData({name:'',email:'',msg:''});
        }
        else{
            setStatus({type:"faiure",msg:"Submission failed"});
        }

        }
        catch(error){
            setStatus({
                type:'error',
                msg:'Something went wrong! Could not connect to Localhost.'
            });
        }
        finally{
            fetchData(false);
}
    }
    return(
        <div id="send-message-container"
         style={{textAlign:'center'}}>
        <h1 id="send-message">Send Message</h1>
        <form  id="send-message-form" onSubmit={handleSubmit}>
            <label><b>Name:</b></label>
            <input type="text" name="name" value={FormData.name} required/><br/><br/>
            <label><b>Email:</b></label>
            <input type="email" name="email" value={FormData.email} required/><br/><br/>
            <label><b>Message:</b></label>
            <input type="text" name="message" value={FormData.message} required/><br/><br/>
            <button type="submit" disabled={fetchData}>
                {fetchData ? "Submitting..." : "Submit"}
            </button>
        </form>
        </div>
    )
}
export default DB_connect;