class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :ends_at,
    :reserve_price,
    :created_at
  ) 


  has_many :bids
  class BidSerializer <ActiveModel::Serializer
    attributes :id, :price, :created_at
  end
end
