class User < ApplicationRecord
  has_many :user_orders
  has_many :orders, through: :user_orders
  has_many :products, through: :orders
end
