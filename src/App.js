import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core"

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }));

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} />
        
      </div>
    </BrowserRouter>
  )
}

export default App;
