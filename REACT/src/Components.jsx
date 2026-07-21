import biryani from "./assets/Biryani.jpg";
function Biryani(props)
{
    return (
        <div>
            <h1 style={{color:"orange"}}>Biryani</h1>
            <div style={{display:"flex",  gap:"30px"}}>
            <p>{props.name}Biryani is a globally celebrated, aromatic mixed rice dish originating from South Asia, 
            traditionally made by layering fragrant basmati rice with marinated meat (chicken, mutton, beef, or fish), eggs, or {props.number}. 
            The magic of a great biryani lies in its slow-cooked "dum" process and a rich blend of whole spices like cardamoms, cloves, cinnamon, and bay leaves {props.k}</p>
        
        <img style={{width:"150px"}}
        src={biryani}></img>
        </div>
        </div>
    );
} 
export default Biryani;