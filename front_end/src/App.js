import Home from "./Pages/Home";
import {Box, Paper} from "@mui/material";
import CustomAppBar from "./Components/CustomAppBar";
import ListMovies from "./Pages/ListMovies";
import Search from "./Pages/Search";
import Actor from "./Pages/Actor";
import Profile from "./Pages/Profile";
import {PageNotFound} from "./Pages/404";
import {Sign} from "./Pages/Sign";
import {SIGN_IN, SIGN_UP} from "./Themes/String/String";
import {Movie_Details} from "./Pages/Movie_Details";
import {Settings} from "./Pages/Settings";
import {Footer} from "./Components/Footer";
import {flex_styles} from "./Themes/Styles/styles";


//<Sign type={SIGN_IN}/>

function App() {
  return (

          <Paper  elevation={0} sx={{flexGrow:1, height:'auto',
              backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
              <CustomAppBar/>

              <Home/>
              <Footer/>

          </Paper>


  );
}

export default App;
