import styled from "styled-components";

// Style for the navigation bar
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0px;
  background-color: white;
  z-index:1;

  .Nav-body {
    display: flex;
    justify-content: space-between;
    width: 100vh;
    background-color: white;
  }

  .style {
    align-items: start;
    background-color: white;
  }

  .date-body {
    display: flex;
  }

  .date-style {
    font-weight: 600;
    padding-top: 30px;
    padding-left: 40px;
    font-size: 39px;
  }

  .day-style {
    font-weight: 600;
    font-size: 16px;
    padding-top: 22px;
    padding-right: 40px;
    background-color:white;

  }

  .month-style {
    font-weight: 600;
    position: relative;
    top: 22px;
    margin-top:14px;
    font-size: 15px;
  }

  .year-style {
    padding-top: 2px;
    font-size: 15px;
    margin-top: 18px;
    margin-left: 5px;
    font-weight: 300;
  }

  @media (max-width: 355px) {
    .date-style {
      padding-left: 25px;
      font-size: 35px;
    }

    .day-style {
      font-size: 15px;
      padding-right: 25px;
    }

    .month-style {
      font-size: 13px;
    }

    .year-style {
      font-size: 13px;
    }

  @media (max-width: 330px) {
    .month-style {
      margin-top:12px;
    }
      
    .year-style {
      padding-top: 2px;
    }
  }
`;
