Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do

      resources :articles, only: [:index, :show] do
        resources :clicks
        resources :scrolls
        resources :scrolls_durations
      end
      resources :clicks, only: [:index]
      resources :scrolls, only: [:index]

      resources :ga_api_info
  end
end
