import React from "react";
import { Wrapper } from "../../styled/NavBar";
import { date, day, shortMonth, year } from "../../utils/date";

// function for displaying the navigation bar using its styled component
function Navbar() {
  return (
    <>
      <Wrapper>
        <div className="Nav-body">
          <div className="date-body">
            <div className="date-style ">{date}</div>
            <div className="style">
              <p className="month-style">{shortMonth}</p>
              <p className="year-style">{year}</p>
            </div>
          </div>
        </div>
        <div className="day-style ">
          <p>{day}</p>
        </div>
      </Wrapper>
    </>
  );
}

export default Navbar;
