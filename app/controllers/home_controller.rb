class HomeController < ApplicationController
  def index
    @user = User.first
    @products = Product.all
    session[:cart] = {products:[{name: 'P1', price: '4.99', quantity: '3'}], total: 0}
  end
end
