import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import "./weatherView.style.css";

const DateCorousel = (props) => {
  var date = moment(props.weatherDetails[props.indexNo].dt_txt).format('ddd MMM DD YYYY');
  var time = moment(props.weatherDetails[props.indexNo].dt_txt).format('HH:MM')
  return (
    <div className="corouselContainer">
      <div className="datecorousel">
      <FontAwesomeIcon onClick={()=> props.handleIndexChange("minus", props.indexNo -1)} className="fa-lg" icon={faChevronCircleLeft} />
      <div className="dateAndMonth">
          <strong>{date}</strong>
          <strong style={{margin: 'auto'}}>{time}</strong>
      </div>
      <FontAwesomeIcon onClick={()=> props.handleIndexChange("plus", props.indexNo + 1)} className="fa-lg" icon={faChevronCircleRight} />
      </div>
    </div>
  );
};

export default DateCorousel;
