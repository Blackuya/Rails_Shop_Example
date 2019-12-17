class CartController < ApplicationController
  def update
    # puts JSON(params)
    c = []
    unless params[:products].nil?
      params[:products].values.each do |p|
        c << p
      end
  end
    session[:cart]['products'] = c
    # session[:cart] = {"products":[{"name":"P1", "price": "6.66", "quantity":"1"}, {"name":"P2", "price": "6.66", "quantity":"1"}]}

    puts 'AFTER:'
    puts session[:cart]
    render json: session[:cart]
    head :ok, content_type: 'json'
  end
end
