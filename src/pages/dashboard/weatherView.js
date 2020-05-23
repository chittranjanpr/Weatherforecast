import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faFlag,
  faBurn,
  faCloudMeatball,
  faCloudSun,
  faFire,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

import "./weatherView.style.css";
import DateCorousel from "./datecorousel";

const WeatherView = (props) => {
  return !props.isFetching && props.weatherDetails.length > 0 ? (
    <div className="containerWeather">
      <div className="innerContainer">
        <Container>
          <Row className="rowSeparator col1">
            <Col className="cityHeader textColor col3">
              <FontAwesomeIcon icon={faCity} /> - 
              <div>{props.cityDetails.name}</div>
            </Col>
            <Col  className="cityHeader textColor">
              <FontAwesomeIcon icon={faFlag} /> - 
              <div>{props.cityDetails.country}</div>
            </Col>
          </Row>
          <Row className="rowSeparator">
            <Col className="cityHeader textColor sudheaders col3">
              <div>Cloudiness :</div>
              <div style={{ margin: "auto" }}>
                {props.weatherDetails[props.indexNo].clouds.all}%
              </div>
            </Col>
            <Col className="cityHeader textColor sudheaders">
              <div>Rain :</div>
              <div style={{ margin: "auto" }}>
                {props.weatherDetails[props.indexNo].rain
                  ? props.weatherDetails[props.indexNo].rain["3h"]
                  : "-"}
              </div>
            </Col>
          </Row>
          <Row className="rowSeparator">
            <Col className="cityHeader textColor sudheaders col3">
              <div style={{ margin: "auto" }}>wind :</div>
              <div style={{ margin: "auto" }}>
                <div>
                  Speed - {props.weatherDetails[props.indexNo].wind.speed}
                </div>
                <div>Deg - {props.weatherDetails[props.indexNo].wind.deg}</div>
              </div>
            </Col>
            <Col className="cityHeader textColor sudheaders">
              <div style={{ margin: "auto" }}>Weather :</div>
              <div style={{ margin: "auto" }}>
                {props.weatherDetails[props.indexNo].weather[0].description}
              </div>
            </Col>
          </Row>
          <Row className="rowSeparator  col2">
            <Col className="cityHeader textColor rowsDatas">
              <div>Temp : {props.weatherDetails[props.indexNo].main.temp} </div>
              <FontAwesomeIcon icon={faCloudMeatball} />
              <div>
                Feels Like :{" "}
                {props.weatherDetails[props.indexNo].main.feels_like}{" "}
              </div>
            </Col>
          </Row>
          <Row className="rowSeparator col2">
            <Col className="cityHeader textColor rowsDatas">
              <div>
                Min Temp : {props.weatherDetails[props.indexNo].main.temp_min}
              </div>
              <FontAwesomeIcon icon={faFire} />
              <div>
                Max Temp: {props.weatherDetails[props.indexNo].main.temp_max}
              </div>
            </Col>
          </Row>
          <Row className="rowSeparator col2">
            <Col className="cityHeader textColor rowsDatas">
              <div>
                Humidity : {props.weatherDetails[props.indexNo].main.humidity}
              </div>
              <FontAwesomeIcon icon={faCloudSun} />
              <div>
                Pressure : {props.weatherDetails[props.indexNo].main.pressure}
              </div>
            </Col>
          </Row>
          <Row className="rowSeparator col2">
            <Col className="cityHeader textColor rowsDatas">
              <div>
                Sea Level : {props.weatherDetails[props.indexNo].main.sea_level}
              </div>
              <FontAwesomeIcon icon={faWater} />
              <div>
                Ground Level :{" "}
                {props.weatherDetails[props.indexNo].main.grnd_level}
              </div>
            </Col>
          </Row>
        </Container>
        <DateCorousel {...props} details={props.weatherDetails} />
      </div>
    </div>
  ) : null;
};

export default WeatherView;
