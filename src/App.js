import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home";
import Publication from "./Component/Publication";
import JoinUs from "./Component/JoinUs";
import Research from "./Component/Research";
import Resource from "./Component/Resource";
import Team from "./Component/Team";
import 'antd/dist/antd.css';
import "./App.css";
const App = () => {
  return (
    <Router>
        <Route exact path="/"><Home/></Route>
        <Route path="/research"><Research/></Route>
        <Route path="/team"><Team/></Route>
        <Route path="/publication"><Publication/></Route>
        <Route path="/join"><JoinUs/></Route>
        <Route path="/resources"><Resource/></Route>
    </Router>
  )
}
export default App;
