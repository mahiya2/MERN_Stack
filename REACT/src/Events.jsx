function Events()
{
    function press(e)
    {
        alert("Key Pressed:"+e.key);
    }
return(
    <>
    <div>
        <button
        onMouseOver={
            ()=>alert("Jerry Files.")
        }
        >
            Jerry
        </button>
        <button
        onMouseLeave={
            ()=>alert("Tom Files.")
        } 
        >
            Tom
        </button>
    </div>
    <input onKeyDown={press} />
    <input 
    onFocus={()=>console.log("Focused")} 
    onBlur={()=>console.log("Blurred")}/>
    </>
)
}
export default Events;