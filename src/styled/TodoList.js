import styled from "styled-components";

// style for the list items
export const Wrapper = styled.div`
 .list-items-body {
   display: flex;
   justify-content: space-between;
}

 .list-style{
   font-size:18px;
}

 .list-item {
   display:flex;
   padding-left:40px;
}

 .list-check {
   padding-right:40px;
   padding-bottom: 20px;
}

 @media(max-width:400px) {
  .list-style {
    font-size: 17px;
  }

 @media(max-width:355px) {
  .list-item {
    padding-left:25px;
  }

  .list-check {
    padding-right:25px;
  }

  .list-style {
    font-size: 15px;
  }

}
`;
