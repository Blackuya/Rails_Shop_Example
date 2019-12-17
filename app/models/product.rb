class Product < ApplicationRecord

  def short(id)
    s = Product.select(:name, :price).find_by(id: id)
    v = {name: s.name, price: s.price, quantity: '1'}
    return v
  end

end
