import {Route, Redirect} from 'react-router-dom'
import { Session } from '../requests';
const AuthRoute = props =>{
    const {component:Component, ...restProps} =props;
    let isAuth={}
    function findUser(){
        Session.currentUser()
        .then((user)=>{
            isAuth=user
        })
    }
    return(
        <Route 
        {...restProps}
        render={
            (routeProps)=>{
                findUser()
                if (Object.keys(isAuth).length!==0){
                    return <Component {...routeProps}/>
                }else{
                    return <Redirect to='/sign_in' />
                }
            }  
        }
        />
    )
}
export default AuthRoute;