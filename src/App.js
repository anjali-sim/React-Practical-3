import "./App.css";
import Todo from "./components/Todo/Todo";
import GlobalStyle from "./styled/GlobalStyle";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    {/* for displaying the toasts */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
      <GlobalStyle />
      <Todo />
    </>
  );
}

export default App;
