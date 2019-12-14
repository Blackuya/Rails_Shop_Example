class HomeController < ApplicationController
  def index
    @user = User.first
    @products = Product.all
  end
end
