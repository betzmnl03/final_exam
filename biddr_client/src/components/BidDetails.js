import moment from "moment"
const BidDetails = ({ price, created_at}) => {
    return (
      
      <div>
       
        <p>${price} on {moment(created_at).format("MM Do, YYYY")}</p>
      </div>
    )
  }
  
  export default BidDetails