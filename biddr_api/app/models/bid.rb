class Bid < ApplicationRecord

    belongs_to :auction
    # validates :price, presence: {message: " should be present."}, uniqueness:true
    belongs_to :user, optional: true
end
