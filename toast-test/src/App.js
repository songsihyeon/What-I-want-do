import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify1 = () => toast("It's easy");
  const notify2 = () => toast.info("It's easy");
  const notify3 = () => toast.error("It's easy");
  const notify4 = () => toast.success("It's easy");
  const notify5 = () => toast.warning("It's easy");
  const notify6 = () => toast.dark("It's easy");

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  const btnStyle = {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
  };

  return (
    <div style={style}>
      <button onClick={notify1} style={btnStyle}>
        common
      </button>
      <button onClick={notify2} style={btnStyle}>
        info
      </button>
      <button onClick={notify3} style={btnStyle}>
        error
      </button>
      <button onClick={notify4} style={btnStyle}>
        success
      </button>
      <button onClick={notify5} style={btnStyle}>
        warning
      </button>
      <button onClick={notify6} style={btnStyle}>
        dark
      </button>
      <ToastContainer position="top-left" />
      <ToastContainer position="top-center" />
      <ToastContainer position="top-right" />
      <ToastContainer position="bottom-left" />
      <ToastContainer position="bottom-center" />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
