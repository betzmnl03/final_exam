const AuctionForm = ({createAuction})=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
       
        const formData = new FormData(event.currentTarget)
        const params = {
            title: formData.get("title"),
            description: formData.get("description"),
            ends_at:formData.get("ends_at"),
            reserve_price: formData.get("reserve_price")
        }

        createAuction(params)
    }
    return(
        <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="col-sm-4 text-center">
            <div className="form-group">
                <label htmlFor='title'>Title</label>
                <br />
                <input type="text" className="form-control" name='title' id='title' />
            </div>
            <div className="form-group">
                <label htmlFor='description'>Description</label>
                <br />
                <textarea name='description' className="form-control" id='description' />
            </div>
            <div className="form-group">
                <label htmlFor='reserve_price'>Reserve Price</label>
                <br />
                <input type="number" className="form-control" name='reserve_price' id='reserve_price' />
            </div>
            <div className="form-group">
                <label htmlFor='ends_at'>Ends At</label>
                <br />
                <input type="date" className="form-control" name='ends_at' id='ends_at' />
            </div>
            <div>
                <button type='submit'className="btn btn-outline-primary" value='Save'>Create</button>
            </div>

        </form>
        </div>
    )
} 

export default AuctionForm