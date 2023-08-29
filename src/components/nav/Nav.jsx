import { useState } from "react"
import locat from "../../assets/img/lct.svg"
function Nav({nuevaLocacion}) {
    const [city, setCity] = useState("");
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log({city})
        if(city === "" || !city) return;

        nuevaLocacion(city);
    }
  return (
    <>
        <form onSubmit={onSubmit} className="form">
            <input className="inp" type="text" onChange={(e) => setCity(e.target.value)} placeholder="Pais/ciudad"/>
            <button type="submit" className="btn" ><img src={locat} alt="icon" className="imgs"/></button>
        </form>
    </>
  )
}

export default Nav