import React, {useState} from 'react';
import {Bid,Auction} from '../requests';


const BidForm = (props)=>{
    const {id} = props
    const [price,setPrice]=useState('');
    const handleSubmit = (event)=>{
        // event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            price: formData.get('price'),
        }
        Bid.create(id,params)
        .then(()=>{
            console.log("here")
            Auction.show(id)
        })
    }

    return(
        <div>
            <form onSubmit={event=>handleSubmit(event)}>
                <input className="m-4" type="number" name='price' id='price' value={price} onChange={e=>setPrice(e.target.value)}/>
                <input type='submit' value='Bid' className="m-4"/>
            </form>
        </div>
    )
}
export default BidForm;