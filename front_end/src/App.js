import Home from "./Pages/Home";
import {Paper} from "@mui/material";
import CustomAppBar from "./Components/CustomAppBar";
import ListMovies from "./Pages/ListMovies";
import Search from "./Pages/Search";
import Actor from "./Pages/Actor";
import Profile from "./Pages/Profile";
import {PageNotFound} from "./Pages/404";
import {Sign} from "./Pages/Sign";
import {SIGN_IN, SIGN_UP} from "./Themes/String/String_eng";
import {Movie_Details} from "./Pages/Movie_Details";
import {Settings} from "./Pages/Settings";
import {Footer} from "./Components/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Paper  elevation={0} sx={{flexGrow:1, height:'auto',
              backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
              <CustomAppBar/>
              <Switch>
                  <Route exact path="/">
                      <Home/>
                  </Route>
                  <Route exact path="/list-movies">
                      <ListMovies/>
                  </Route>
                  <Route exact path="/search">
                      <Search/>
                  </Route>
                  <Route exact path="/actor">
                      <Actor/>
                  </Route>
                  <Route exact path="/profile">
                      <Profile/>
                  </Route>
                  <Route exact path="/page-not-found">
                      <PageNotFound/>
                  </Route>
                  <Route exact path="/details">
                      <Movie_Details/>
                  </Route>
                  <Route exact path="/settings">
                      <Settings/>
                  </Route>
                  <Route exact path="/sign-in">
                      <Sign type={SIGN_IN}/>
                  </Route>
                  <Route exact path="/sign-up">
                      <Sign type={SIGN_UP}/>
                  </Route>
              </Switch>
              <Footer/>

          </Paper>
      </Router>


  );
}

export default App;
