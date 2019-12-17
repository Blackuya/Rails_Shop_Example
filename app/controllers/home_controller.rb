class HomeController < ApplicationController
  def index
    @user = User.first
    @products = Product.all
    puts "HOME:"
    puts session[:cart]
    if session[:cart].nil?
      session[:cart]["products"] = []
    end
  end

end
