import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from "./components/FormInput";
//import FormOutput from "./components/FormOutput"
import './App.css';



function App() {

  return (
    <div className="App">
      <FormInput></FormInput>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FormInput />}></Route>
          <Route exact path="/output" element={<FormOutput />}></Route>
        </Routes>
      </BrowserRouter> */}

    </div >
  );
}

export default App;
