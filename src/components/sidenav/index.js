import React, { useRef, useEffect } from "react";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import "./sidenav.css";

const SideNav = (props) => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.handleToggle();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return props.show ? (
    <div className="sideNavContainer" ref={wrapperRef}>
      <div className="navContainer">
        <InputGroup className="mb-3 inputContainer">
          <FormControl
            autoFocus
            placeholder="Enter City"
            aria-label="Enter City"
            aria-describedby="basic-addon2"
            style={{height: '55px'}}
            onChange={(e) => props.handleChange(e.target.value)}
          />
        </InputGroup>
        <div className="dropDown">
          {props.cityList.map((data, index) => (
            <Card key={index} onClick={() => props.fetchDetails(data.city["id"])}>
              <Card.Body>{data.city["name"]}</Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default SideNav;