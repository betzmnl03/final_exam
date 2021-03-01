class Bid < ApplicationRecord

    belongs_to :auction
    validates :price, presence: {message: " should be present."}, uniqueness:true
end
