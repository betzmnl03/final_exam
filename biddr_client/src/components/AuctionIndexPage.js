import {Component} from "react"
import {Auction} from "../requests"
import {Link} from "react-router-dom"
import moment from "moment"
import Card from "react-bootstrap/Card"
class AuctionIndexPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            auctions: []
        }
    }

    componentDidMount(){
        Auction.index()
        .then((auctions)=>{
            this.setState((state)=>{
                return{
                    auctions: auctions
                }
            })
        })
    }

    render(){
        return(
            <main>
                <h1>Auctions</h1>
                {this.state.auctions.map(a => {
                    return(
                        <div key={a.id}>
                                  <Card>
                                    <Card.Title><Link to={`/auctions/${a.id}`}>
                            <h3>{a.title}</h3>
                        </Link></Card.Title>
                                    <Card.Subtitle>
                                    <blockquote className="blockquote mb-0">
                                        
                                        Posted on {moment(a.created_at).format("MMM Do, YYYY")}
                                      
                                    </blockquote>
                                    </Card.Subtitle>
                                </Card>
                        {/* <p>Posted on {moment(a.created_at).format("MMM Do, YYYY")} </p> */}
                        <br/>
                        </div>
                        
                    )
                })}
            </main>
        )
    }
}

export default AuctionIndexPage