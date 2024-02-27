import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />  //React Router한테 이 url이 변수(여기선 id)를 받을 것이리고 말하고 있는 것
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
