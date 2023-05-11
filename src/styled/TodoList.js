import styled from "styled-components";

// Style for the scroll bar
export const Wrap = styled.div`
  height: 420px;
  width: 400px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px grey;
    border-radius: 10px;
    height: 20px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: darkgrey;
    border-radius: 10px;
    height: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  @media (max-width: 400px) {
    width: 350px;
  }

  @media (max-width: 355px) {
    width: 320px;
  }
`;

// Style for the list items
export const Wrapper = styled.div`
 .list-items-body {
   display: flex;
   justify-content: space-between;
   -webkit-mask-image: linear-gradient(#000, rgba(0,0,0,0.2));
   mask-image: linear-gradient(#000, rgba(0,0,0,0.2));
}

 .list-style{
   font-size:18px;
}

 .list-item {
   display:flex;
   padding-left:40px;
   overflow-y:hidden;
}

 .list-check {
   padding-right:40px;
   padding-bottom: 20px;
}

.list-check {
  padding-right:25px;
}

.list-style {
  font-size: 15px;
}

 @media(max-width:400px) {
  .list-style {
    font-size: 17px;
  }

 @media(max-width:355px) {
  .list-item {
    padding-left:25px;
  }
}
`;
