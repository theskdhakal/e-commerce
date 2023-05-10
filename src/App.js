import { Button } from "react-bootstrap";
import "./App.css";
import { ToastContaine, ToastContainer, toast } from "react-toastify";

function App() {
  toast.success("gbhn");
  return (
    <div className="App">
      <Button variant="danger">"hello world"</Button>
      <ToastContainer />
    </div>
  );
}

export default App;
