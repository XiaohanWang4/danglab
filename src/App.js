import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home";
import Publication from "./Component/Publication";
import "./App.css";
import JoinUs from "./Component/JoinUs";
import Research from "./Component/Research";
import Resource from "./Component/Resource";
import Team from "./Component/Team";
const App = () => {
  return (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/research" component={Research}/>
        <Route path="/team" component={Team}/>
        <Route path="/publication" component={Publication}/>
        <Route path="/join" component={JoinUs}/>
        <Route path="/resource" component={Resource}/>
    </Router>
  )
}
export default App;
