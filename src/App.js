import Home from "./Pages/Home";
import {Paper} from "@mui/material";
import CustomAppBar from "./Components/CustomAppBar";
import ListMovies from "./Pages/ListMovies";
import Search from "./Pages/Search";
import Actor from "./Pages/Actor";
import Profile from "./Pages/Profile";
import {PageNotFound} from "./Pages/404";
import {Sign} from "./Pages/Sign";
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
import Notification from "./Pages/Notification";
import {CustomSingleton} from "./Themes/Styles/Typographies";



function App(props) {
    const [listMovies, setListMovies] = useState([]);
    const [listSeries,setListSeries] = useState([]);
    const [listTheaters,setListTheaters] = useState([]);
    const [listWWE,setListWWE] = useState([]);
    const [listSearch,setListSearch] = useState([]);
    const [SignedIN, setSignIn] = useState(false);
    const [actorState, setActor] = useState({});
    const [selectorForDetails, setSelectorForDetails] = useState({});
    const [wordSearch,setWordSearch] = useState('');



    const setUser = ()=>{
        if(SignedIN){
            localStorage.setItem('user', 'false');

        }else{
            localStorage.setItem('user', 'true');

        }
        setSignIn(!SignedIN)

    }

    const setResearch = (name)=>{
        const l1 = listMovies.filter((item)=>(item.name.toLowerCase()===name.toLowerCase()));
        const l2 = listSeries.filter((item)=>(item.name.toLowerCase()===name.toLowerCase()));
        const l3 = listTheaters.filter((item)=>(item.name.toLowerCase()===name.toLowerCase()));
        const l4 = listWWE.filter((item)=>(item.name.toLowerCase()===name.toLowerCase()));

        let list = (l1.length>0)?l1.concat(l2):l2;
        list = (list.length>0)?list.concat(l3):l3;
        list = (list.length>0)?list.concat(l4):l4;
        localStorage.setItem('search', JSON.stringify(list));
        localStorage.setItem('wordSearch',name);
        setListSearch(list);
        setWordSearch(name);
    }

    const selectorClicker = (obj)=>{ // may be serie, movie , theater or wwe selector
        localStorage.setItem('selector', JSON.stringify(obj));
        setSelectorForDetails(obj)
    }
    const selectorActor = (obj)=>{ // may be serie, movie , theater or wwe selector
        localStorage.setItem('actor', JSON.stringify(obj));
        setActor(obj)
    }

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/src/DataJSON/movies.json")
            .then(res => res.json())
            .then(data => setListMovies(data))
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/src/DataJSON/series.json")
            .then(res => res.json())
            .then(data => setListSeries(data))
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/src/DataJSON/theater.json")
            .then(res => res.json())
            .then(data => setListTheaters(data))
        fetch("https://raw.githubusercontent.com/EngrTAHAR-Noureddine/EgyBest/master/src/DataJSON/wwe.json")
            .then(res => res.json())
            .then(data => setListWWE(data))

        const obj = localStorage.getItem('selector');
        setSelectorForDetails(JSON.parse(obj));
        const obj1 = localStorage.getItem('actor');
        setActor(JSON.parse(obj1));
        const obj2 = localStorage.getItem('user');
        if(obj2==='true'){ setSignIn(true)} else setSignIn(false);
        const obj3 = localStorage.getItem('search');
        setListSearch(JSON.parse(obj3));
        const obj4= localStorage.getItem('wordSearch');
        setWordSearch(obj4);
    },[])

    const string = new String(props.isArabic);
    const ToggleArabic = ()=>{
            if(props.isArabic){
                props.actionEnglishVersion();
            }else{
                props.actionArabicVersion()
            }
        string.toggle(props.isArabic);
            console.log('is arabic : ',props.isArabic);
        CustomSingleton.setIt(props.isArabic);
    }




  return (

      <Router>
          <Paper  elevation={0} sx={{flexGrow:1, height:'auto',
              backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
              <CustomAppBar setResearch={setResearch} SignedIN={SignedIN}
                            setUser={setUser}
                            string={string} isArabic={props.isArabic}
                            toggleLanguage={ToggleArabic}/>
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
                      <ListMovies selectorClicker={selectorClicker} isArabic={props.isArabic} list={listMovies}/>
                  </Route>

                  <Route exact path="/list-series">
                      <ListMovies selectorClicker={selectorClicker} isArabic={props.isArabic} list={listSeries}/>
                  </Route>

                  <Route exact path="/list-theaters">
                      <ListMovies selectorClicker={selectorClicker} isArabic={props.isArabic} list={listTheaters}/>
                  </Route>

                  <Route exact path="/list-wwe">
                      <ListMovies selectorClicker={selectorClicker} isArabic={props.isArabic} list={listWWE}/>
                  </Route>

                  <Route exact path="/search">
                      <Search isArabic={props.isArabic} list={listSearch} wordSearch={wordSearch}/>
                  </Route>

                  <Route exact path="/actor">
                      <Actor actor={actorState} work={string.WORKS()} list={listMovies}/>
                  </Route>

                  <Route exact path="/profile">
                      <Profile isArabic={props.isArabic}
                               listMovies={listMovies}
                               listSeries={listSeries}
                               listTheaters={listTheaters}
                               listWWE={listWWE}
                      />
                  </Route>

                  <Route exact path="/details">
                      <Movie_Details selectorActor={selectorActor} signedIn={SignedIN} isArabic={props.isArabic} selector={selectorForDetails}/>
                  </Route>

                  <Route exact path="/settings">
                      <Settings isArabic={props.isArabic}/>
                  </Route>

                  <Route exact path={"/notification"}>
                      <Notification isArabic={props.isArabic}/>
                  </Route>

                  <Route exact path="/sign-in">
                      <Sign setUser={setUser} isArabic={props.isArabic} type={string.SIGN_IN()}/>
                  </Route>

                  <Route exact path="/sign-up">
                      <Sign setUser={setUser} isArabic={props.isArabic} type={string.SIGN_UP()}/>
                  </Route>

                  <Route path="/">
                      <PageNotFound notFound={string.PAGE_NOT_FOUND()}/>
                  </Route>

              </Switch>
              <Footer isArabic={props.isArabic}/>
          </Paper>
      </Router>

  );
}

const mapStateToProps = (state) => ({
    isArabic: state.isArabic.isArabic,
});

export default connect(mapStateToProps,{actionArabicVersion, actionEnglishVersion})(App);
