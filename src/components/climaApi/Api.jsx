import { useState } from "react";
import Nav from "../nav/Nav";
import Card from "../card/Card";
function Api() {
    let weater = "https://api.openweathermap.org/data/2.5/weather?appid=f4f2b97e951a7bc1c0ad577285a5701a&lang=es";
    let weaterCity = "&q=";
    let forecasts = "https://api.openweathermap.org/data/2.5/forecast?appid=f4f2b97e951a7bc1c0ad577285a5701a&lang=es";
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [locacion, setLocacion] = useState("");

    const getLocacion = async(loc) => {
        setLoading(true);
        setLocacion(loc);

        //weater
        weater = weater + weaterCity + loc;
        await fetch(weater).then((response) =>{
            if (!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })

        //forecast
        forecasts = forecasts + weaterCity + loc;
        await fetch(forecasts).then((response) =>{
            if (!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })
    }
  return (
    <>
        <main className="container">
            <section className="derecha">
                <Nav nuevaLocacion={getLocacion}></Nav>
                <Card 
                    showData={show}
                    loadingData={loading}
                    weather={weather}
                    forecast={forecast}
                ></Card>
            </section>
            <section className="izquierda">
                
            </section>
           
        </main>
    </>
  )
}

export default Api