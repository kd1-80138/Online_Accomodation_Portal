import Signin from "./pages/Signin/Signin.js";
import {Route} from 'react-router-dom';
import NotFound from "./components/NotFound.js";

const ProtectedRoute=(props)=>
{
    debugger
    var isUserLoggedIn = 
    window.sessionStorage.getItem("isUserLoggedIn");

     var role= window.sessionStorage.getItem('role');

    if(isUserLoggedIn != null && isUserLoggedIn != false &&
       isUserLoggedIn!='undefined' && isUserLoggedIn=="true" && role=="USER")
    {
        return <Route exact path={props.path} 
        component={props.component}/>;
    }
    else if(isUserLoggedIn != null && isUserLoggedIn != false &&
        isUserLoggedIn!='undefined' && isUserLoggedIn=="true" && role=="ADMIN")
    {
        return <NotFound></NotFound>
    }else
    {
        return <Signin></Signin>
    }

}

export default ProtectedRoute;