import {useState,useEffect} from "react"; 
import UserContext from "./UserContext.jsx"
import "./Count.css";
import Parent from "./Parent.jsx";
function Count()
{
    const [count,setCount]=useState(0);
    const [mobile,Buymobile]=useState(false);
    const [Lunch,FinishLunch]=useState();
    useEffect(
        ()=>{
            document.title=`Count : ${count}`;
        },[count]
    );
    return (
      <div id="bg">
        <h1 className="count">COUNT : {count}</h1>
          <div className="counting">
        <button  onClick={
            ()=>setCount(count+1)
        }>
            +1
        </button>
        <button onClick={
            ()=>setCount(count-1)
        }>
            -1
        </button>
        </div>
        <h2>Phone:{mobile ? "Android" :"iphone"}</h2>
        <button onClick={
            ()=>Buymobile(!mobile)
        }>Change
        </button>
        <div>
            <h2>I ate {Lunch} for Lunch.</h2>
            <input type="text"
            placeholder="ROTI"
            value={Lunch}
            onChange={
                (e)=>FinishLunch(e.target.value)
            }/>
        </div>
        <UserContext.Provider value="Fazeela">
        <Parent/>
        </UserContext.Provider>
        </div>
    );
}
export default Count;