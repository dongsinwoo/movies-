import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ditail from "./routes/Ditail";
import Home from "./routes/Home";
import './App.scss'
function App (){
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Ditail />
        </Route>
        <Route path="/">
          <h1 className="title">Best Moives</h1>
          <Home />
        </Route>
      </Switch>
    </Router>
  );

}
// 다른 파일에 이파일을 옮겨 쓸 수있게 해줌
export default App;
