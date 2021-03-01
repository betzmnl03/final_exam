class Auction < ApplicationRecord

    has_many :bids, dependent: :destroy

    validates :title, presence: true,uniqueness: true
    validates :description, presence: true
    validates :ends_at, presence: true
    validates :reserve_price, presence: true
end
