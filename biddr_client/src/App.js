import './App.css';
import {Component} from "react";
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from "./components/AuctionIndexPage"
import NavBar from "./components/NavBar"
import AuctionNewPage from "./components/AuctionNewPage"
import { Session,User } from './requests';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"
import AuthRoute from "./components/AuthRoute"
import SignUpPage from "./components/SignUpPage"
import SignInPage from "./components/SignInPage";
import WelcomePage from './components/WelcomePage';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      clocksCount: [1],
      user:null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.destroySession = this.destroySession.bind(this)
  }

  componentDidMount() {
    Session.currentUser()
    .then(user=>{
      // console.log('user', user);
      this.setState((state)=>{
        return {user:user}
      })
    })
  }
  handleSubmit(params){
    // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
    Session.create(params).then(()=>{
      return Session.currentUser()}
      ).then(user=>{
        this.setState((state)=>{
          return {user:user}
        })
      })

  }

  handleSignUp(params){
    User.create(params)
    .then(()=>{
      return Session.currentUser()
    }).then(user=>{
      this.setState((state)=>{
        return {user:user}
      })
    })
  }

  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState((
        state=>{
          return {user:null}
        }
      ))
    })
  }
  render(){
    return (
      <div className="App">
        
        <BrowserRouter>
          <NavBar currentUser={this.state.user} destroySession={this.destroySession}/>
            <Switch>
              <Route path="/" exact component={WelcomePage}/>
              {/* <Route path="/products/new"  component={ProductNewPage}/> */}
              <Route path='/auctions/new' render={(routeProps)=><AuctionNewPage  {...routeProps}/>} />
              {/* <AuthRoute exact path='/auctions/new' isAuth={this.state.user} component={AuctionNewPage}/> */}
            
              <Route path="/auctions/:id" exact component={AuctionShowPage}/>
              <Route path="/auctions" component={AuctionIndexPage}/>
              <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
              <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSubmit={this.handleSignUp} {...routeProps}/>} />
  
            </Switch>
        </BrowserRouter>
       
      </div>
    );

  }
}

export default App;
