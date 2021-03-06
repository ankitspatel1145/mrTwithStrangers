Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :users, only:[:show ,:create]
    resource :session, only:[:create, :destroy]
    resources :events
  end
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
