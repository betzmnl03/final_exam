# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Auction.delete_all
Bid.delete_all

NUM_AUCTIONS = 15
NUM_USER = 10

PASSWORD='supersecret'
super_user= User.create(
    first_name: 'Jon',
    last_name:'Snow',
    email: 'js@winterfell.gov',
    password: PASSWORD,
)

NUM_USER.times do
    first_name= Faker::Name.first_name 
    last_name= Faker::Name.last_name 
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}.#{last_name}@example.com",
        password: PASSWORD
    )
end
users=User.all

NUM_AUCTIONS.times do 
    created_at=Faker::Date.backward(days: 365*5)
    a = Auction.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        ends_at: Faker::Date.forward(days: 100),
        reserve_price: rand(20..500),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )

    if a.valid?
        a.bids = rand(2..6).times.map do
            Bid.new(
                price: rand(20..550),
                user: users.sample
            )
        end
    end
end

auction = Auction.all
bid = Bid.all

puts Cowsay.say("Generated #{auction.count} auctions.",:frogs)
puts Cowsay.say("Generated #{bid.count} bid.",:tux)
puts Cowsay.say("Generated #{users.count} users.",:beavis)
puts Cowsay.say("Login with  #{super_user.email} and password:#{PASSWORD}.",:koala)
