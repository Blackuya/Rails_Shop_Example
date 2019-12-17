Rails.application.routes.draw do
  get 'cart/update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  patch '/cart', to: 'cart#update'
end
