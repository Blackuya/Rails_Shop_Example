class Order < ApplicationRecord
  has_many :user_order
  has_many :order_products
  has_many :products, through: :order_products
  def total
    price = 0.0
    order_products.each do |p|
      price += p.product.price * p.quantity
    end
    return price
  end
end
