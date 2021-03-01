class Api::V1::BidsController < Api::ApplicationController

    def create
        # puts params
        @auction = Auction.find params[:auction_id]
       
        bid = Bid.new params.require(:bid).permit(:price)
        bid.auction = @auction
        if bid.save
            render json:bid
        else
            render(
                json: {errors: bid.errors},
                status: 422 
            )
        end
    end

end
