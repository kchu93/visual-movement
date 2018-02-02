# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Image.delete_all

DemoAccount = User.create(username: "demoaccount", email: "demoaccount", password: "demopassword")
User1 = User.create(username: "Kevin", email: "Kevin", password: 123456)
User2 = User.create(username: "John", email: "John", password: 123456)
User3 = User.create(username: "Bob", email: "Bob", password: 123456)
User4 = User.create(username: "Frank", email: "Frank", password: 123456)

# Image Seed

Image1 = Image.create(image_url: "https://i.imgur.com/0kJMcee.jpg", author_id: 1)
Image2 = Image.create(image_url: "https://i.imgur.com/WOFVHSE.jpg", author_id: 1)
Image3 = Image.create(image_url: "https://i.imgur.com/CZbSfku.jpg", author_id: 1)
Image4 = Image.create(image_url: "https://i.imgur.com/DOy5OPP.jpg", author_id: 1)
Image5 = Image.create(image_url: "https://i.imgur.com/jfx4Quj.jpg", author_id: 1)
Image6= Image.create(image_url: "https://i.imgur.com/jFqwftF.jpg", author_id: 1)
Image7= Image.create(image_url: "https://i.imgur.com/UPrfEb4.jpg", author_id: 2)
Image8= Image.create(image_url: "https://i.imgur.com/MbSdLNo.jpg", author_id: 2)
Image9= Image.create(image_url: "https://i.imgur.com/YMTZoQK.jpg", author_id: 2)
Image10= Image.create(image_url: "https://i.imgur.com/lJkMH24.jpg", author_id: 2)
Image11= Image.create(image_url: "https://i.imgur.com/MyHTJlO.jpg", author_id: 2)
