import {Component} from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Auction, Session } from "../requests"; 
import AuctionForm from "./AuctionForm"

export default class AuctionNewPage extends Component{
    constructor(props){
        super(props);
        this.createAuction = this.createAuction.bind(this)


    }
    createAuction(params){
        Auction.create(params)
        .then(({id})=>{
            this.props.history.push(`/auctions/${id}`)
        })
    }
   
    render(){
        return(
            <main>
                <AuctionForm createAuction = {this.createAuction}/>
              
            </main>
        )
    }

}