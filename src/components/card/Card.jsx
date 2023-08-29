import { svgIconClasses } from "@mui/material";
import Spin from "../climaApi/spin"
import Icons from "./Icon";
function Card({loadingData,showData, weather, forecast}) {

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;


  let url = "";
  let iconoUrl = "";

  let icon3 = "";
  let icon4 = "";
  let icon5 = "";
  let icon6 = "";
  let icon7 = "";

  let forecast3 = "";
  let forecast4 = "";
  let forecast5 = "";
  let forecast6 = "";
  let forecast7 = "";
    if(loadingData){
        return<Spin/>
    }
    if (showData){
      url = "http://openweathermap.org/img/w/";
      iconoUrl = url + weather.weather[0].icon + ".png";


      icon3 = url + forecast.list[6].weather[0].icon + ".png";
      icon4 = url + forecast.list[14].weather[0].icon + ".png";
      icon5 = url + forecast.list[22].weather[0].icon + ".png";
      icon6 = url +forecast.list[30].weather[0].icon + ".png";
      icon7 = url +forecast.list[35].weather[0].icon + ".png";

      forecast3 = forecast.list[6].dt_txt.substring(8, 10)+'/'+forecast.list[6].dt_txt.substring(5, 7)+'/'+forecast.list[6].dt_txt.substring(0, 4);
      forecast4 = forecast.list[14].dt_txt.substring(8, 10)+'/'+forecast.list[14].dt_txt.substring(5, 7)+'/'+forecast.list[14].dt_txt.substring(0, 4);
      forecast5 = forecast.list[22].dt_txt.substring(8, 10)+'/'+forecast.list[22].dt_txt.substring(5, 7)+'/'+forecast.list[22].dt_txt.substring(0, 4);
      forecast6 = forecast.list[30].dt_txt.substring(8, 10)+'/'+forecast.list[30].dt_txt.substring(5, 7)+'/'+forecast.list[30].dt_txt.substring(0, 4);
      forecast7 = forecast.list[35].dt_txt.substring(8, 10)+'/'+forecast.list[35].dt_txt.substring(5, 7)+'/'+forecast.list[35].dt_txt.substring(0, 4);
    }
    
  return (
    <div>

      {
        showData === true ? (
          <div className="principal">
              <div className="cardcontainer">
                <div >
                    <div className="img">
                      <div className="info">
                      <img src={iconoUrl} />
                      <h3>{weather.name}</h3>
                        <p>{date}</p>
                        <h1>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                        
                        <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                    
                </div>
              </div>
              <div className="predicciones">
                       <div className="containerdias">
                       <div className="dias">
                          <p>{forecast3}</p>
                          <p><img src={icon3} alt="" />{forecast.list[6].weather[0].description}</p>
                          <p>{(forecast.list[6].main.temp - 273.15).toFixed(1)}C</p>
                        </div>
                        <div className="dias">
                          <p>{forecast4}</p>
                          <p><img src={icon4} alt="" />{forecast.list[14].weather[0].description}</p>
                          <p>{(forecast.list[14].main.temp - 273.15).toFixed(1)}C</p>
                        </div>
                        <div className="dias">
                          <p>{forecast5}</p>
                          <p><img src={icon5} alt="" />{forecast.list[22].weather[0].description}</p>
                          <p>{(forecast.list[22].main.temp - 273.15).toFixed(1)}C</p>
                        </div>
                        <div className="dias">
                          <p>{forecast6}</p>
                          <p><img src={icon6} alt="" />{forecast.list[30].weather[0].description}</p>
                          <p>{(forecast.list[30].main.temp - 273.15).toFixed(1)}C</p>
                        </div>
                        <div className="dias">
                          <p>{forecast6}</p>
                          <p><img src={icon7} alt="" />{forecast.list[35].weather[0].description}</p>
                          <p>{(forecast.list[35].main.temp - 273.15).toFixed(1)}C</p>
                        </div>

                       </div>
                       <div className="today">
                        <h1>Estadisticas del dia</h1>
                        <div className="pedicard">
                          <div className="predi">velocidad del viento: <h3>{weather.wind.speed} m/s</h3></div>
                          <div className="predi">Humedad: <h3>{weather.main.humidity}%</h3>
                          <progress className="porcHum" max="100" value={weather.main.humidity}>{weather.main.humidity}</progress>
                          </div>
                          <div className="predi">Temp. Maxima <h3>{(weather.main.temp_max - 273.15).toFixed(1)} °C</h3></div>
                          <div></div>
                        </div>
                       </div>
              </div>
          </div>
        ):(
              <h2>sin datos</h2>
        )
      }



    </div>
  )
}

export default Card