Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :follows, only: [:create]
    end
    resource :session, only: [:create, :destroy, :new]
    resources :images, only: [:index, :show, :create, :destroy, :update]
    resources :follows, only: [:destroy]
  end

  root "static_pages#root"
end
