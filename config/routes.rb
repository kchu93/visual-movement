Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :new]
    resources :images, only: [:index, :show, :create, :destroy, :update]
    resources :follows, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]

    get "users/:userId/likes", to:"users#likes"
  end

  root "static_pages#root"
end
