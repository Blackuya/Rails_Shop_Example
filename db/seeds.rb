# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.find_or_create_by(name: 'Backpack', description: "A school backpack!", price: 49.99)
p2 = Product.find_or_create_by(name: 'Watch', description: "A fancy fake watch.", price: 4.99)
product = Product.find_or_create_by(name: 'Learn C# in 24 Years', description: "Enough time to learn how to code.", price: 249.49)
user = User.find_or_create_by(first_name: 'Tom', last_name: 'Henderson', email_string: 'tch@example.com')
o = Order.find_or_create_by!(id: 1)
user.user_orders.find_or_create_by(order: o)
o.order_products.find_or_create_by(product: product, quantity: 2)
o.order_products.find_or_create_by(product: p2, quantity: 3)
