import "./App.css";
import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

    const [Progress, setProgress] = useState(10);

  return (
    <div>
      <Router>
        <Navbar />

        <LoadingBar
          color="#f11946"
           progress={Progress}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={setProgress} 
                key="general"
                pageSize={10}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News setProgress={setProgress} 
                key="Business"
                pageSize={10}
                country={"in"}
                category={"Business"}
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News setProgress={setProgress} 
                key="Entertainment"
                pageSize={10}
                country={"in"}
                category={"Entertainment"}
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News setProgress={setProgress} 
                key="Health"
                pageSize={10}
                country={"in"}
                category={"Health"}
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News setProgress={setProgress} 
                key="Science"
                pageSize={10}
                country={"in"}
                category={"Science"}
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News setProgress={setProgress} 
                key="Sports"
                pageSize={10}
                country={"in"}
                category={"Sports"}
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News setProgress={setProgress} 
                key="Technology"
                pageSize={10}
                country={"in"}
                category={"Technology"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
