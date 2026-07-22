import{useState} from "react";
function Forms(){
const[User,SetUser]=useState(
{
    name:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
    skills:"",
}
);
const change=(e)=>{
SetUser(
 {
    ...User,[e.target.name]:e.target.value
 }   
);
};
const handleSubmit=(e)=>
    {
e.preventDefault();
alert("Form Submitted");
};
return(
    <>
    <div>
        <h1>Forms</h1>
        <form onSubmit={handleSubmit}>
            <label><b>Name :</b></label>
            <input type="text" name="name" value={User.name} onChange={change} /><br />
            <label><b>Email:</b></label>
            <input type="email" name="email" value={User.email} onChange={change} /><br />
            <label><b>Password:</b></label>
            <input type="password" name="password" value={User.password} onChange={change} /><br />
            <label><b>Phone :</b></label>
            <input type="number" name="phone" value={User.phone} onChange={change} /><br />
            <label><b>Gender :</b></label>
            <input type="radio" name="gender" value="Male" onChange={change} />Male
            <input type="radio" name="gender" value="Female" onChange={change} />Female <br/>
            <label><b>Skills:</b></label>
           <select name="skills" value={User.skills} onChange={change}>
           <option value="React">React</option>
           <option value="HTML">Html</option>
           <option value="CSS">Css</option>
           </select><br/>
           <button type="submit">SUBMIT</button>
        </form>
        </div>
    <div style={{position:"relative",top:"2cm"}}>
    <table>
        <tr>
            <th>Name :</th>
            <td>{User.name}</td>
        </tr>
          <tr>
            <th>Email:</th>
            <td>{User.email}</td>
        </tr>
          <tr>
            <th>Password:</th>
            <td>{User.password}</td>
        </tr>
          <tr>
            <th>Phone :</th>
            <td>{User.phone}</td>
        </tr>
          <tr>
            <th>Gender :</th>
            <td>{User.gender}</td>
        </tr>
          <tr>
            <th>SKill:</th>
            <td>{User.skills}</td>
        </tr>
    </table>
    </div>
    </>
    );
}

export default Forms