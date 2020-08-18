import React from 'react';
import Register from './pages/Register/Register';
import './App.scss';
import Login from "./pages/Login/Login";
import Forgot from "./pages/Forgot/ForgotPassword";
import Reset from './pages/reset/reset';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import LoadingOverlay from 'react-loading-overlay';
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const [loader, setLoader] = React.useState(false);
  const [snackbar, snackbarValue] = React.useState({
    isOpen: false,
    snakbarmsg: ''
  });


  const toggleLoader = (value) => {
    if (value === true || value === false)
      setLoader(value);
  }
  const toggleSnackbar = (isOpen, msg) => {
    snackbarValue(preState => {
      return { isOpen: isOpen, snakbarmsg: msg }
    }
    
    )
    if(isOpen){
      setTimeout(() => {
        toggleSnackbar(false,'')
      }, 4000);
    }
  }
  return (
    <div className="App">
      <Snackbar open={snackbar.isOpen} message={snackbar.snakbarmsg} autoHideDuration={3000} action={[
        <Button key="undo" color="secondary" size="small" onClick={() => snackbarValue({ isOpen: false, snakbarmsg: '' })}>
          close
          </Button>

      ]} />
      <LoadingOverlay
        active={loader}
        spinner
        styles={{backgroundColor:'black'}}
        
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Register snackbar={toggleSnackbar} loader={toggleLoader} />
            </Route>
            <Route path="/register">
              <Register snackbar={toggleSnackbar} loader={toggleLoader} />
            </Route>
            <Route path="/login">
              <Login snackbar={toggleSnackbar} loader={toggleLoader} />
            </Route>
            <Route path="/forgot">
              <Forgot snackbar={toggleSnackbar} loader={toggleLoader} />
            </Route>
            <Route path="/reset/:token">
              <Reset snackbar={toggleSnackbar} loader={toggleLoader} />
            </Route>
          </Switch>
        </Router>
      </LoadingOverlay>
    </div>
  );
}

export default App;
