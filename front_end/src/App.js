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

import { connect } from 'react-redux';
import {actionArabicVersion, actionEnglishVersion} from './Redux/actions/arabic';
import String from "./Themes/String/String";
import {useEffect, useState} from "react";
import dataM from "./DataJSON/movies.json";




function App(props) {
    const [listMovies, setListMovies] = useState([]);
    const [listSeries,setListSeries] = useState([]);
    const [listTheaters,setListTheaters] = useState([]);
    const [listWWE,setListWWE] = useState([]);
    const [listSearch,setListSearch] = useState([]);

    const [selectorForDetails, setSelectorForDetails] = useState({});

    const selectorClicker = (obj)=>{ // may be serie, movie , theater or wwe selector
        setSelectorForDetails(obj)
    }

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/front_end/src/DataJSON/movies.json")
            .then(res => res.json())
            .then(data => setListMovies(data))
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/front_end/src/DataJSON/series.json")
            .then(res => res.json())
            .then(data => setListSeries(data))
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/front_end/src/DataJSON/theater.json")
            .then(res => res.json())
            .then(data => setListTheaters(data))
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/front_end/src/DataJSON/wwe.json")
            .then(res => res.json())
            .then(data => setListWWE(data))
    },[])

    const string = new String(props.isArabic);

    const ToggleArabic = ()=>{
            if(props.isArabic){
                props.actionEnglishVersion();
            }else{
                props.actionArabicVersion()
            }
        string.toggle(props.isArabic);
    }




  return (
      <Router>
          <Paper  elevation={0} sx={{flexGrow:1, height:'auto',
              backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
              <CustomAppBar string={string} isArabic={props.isArabic} toggleLanguage={ToggleArabic}/>
              <Switch>
                  <Route exact path="/">
                      <Home isArabic={props.isArabic}
                            listMovies={listMovies}
                            listSeries={listSeries}
                            listTheaters={listTheaters}
                            listWWE={listWWE}
                            selectorClicker={selectorClicker}
                      />
                  </Route>
                  <Route exact path="/list-movies">
                      <ListMovies  isArabic={props.isArabic} list={listMovies}/>
                  </Route>
                  <Route exact path="/list-series">
                      <ListMovies  isArabic={props.isArabic} list={listSeries}/>
                  </Route>
                  <Route exact path="/list-theaters">
                      <ListMovies  isArabic={props.isArabic} list={listTheaters}/>
                  </Route>
                  <Route exact path="/list-wwe">
                      <ListMovies  isArabic={props.isArabic} list={listWWE}/>
                  </Route>
                  <Route exact path="/search">
                      <Search isArabic={props.isArabic} list={listSearch}/>
                  </Route>
                  <Route exact path="/actor">
                      <Actor/>
                  </Route>
                  <Route exact path="/profile">
                      <Profile/>
                  </Route>
                  <Route exact path="/details">
                      <Movie_Details selector={selectorForDetails}/>
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
                  <Route path="/">
                      <PageNotFound/>
                  </Route>
              </Switch>
              <Footer/>

          </Paper>
      </Router>


  );
}

const mapStateToProps = (state) => ({
    isArabic: state.isArabic.isArabic,
});

export default connect(mapStateToProps,{actionArabicVersion, actionEnglishVersion})(App);
