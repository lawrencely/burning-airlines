# == Route Map
#
#           Prefix Verb   URI Pattern                      Controller#Action
#             root GET    /                                flights#home
#            login GET    /login(.:format)                 session#new
#                  POST   /login(.:format)                 session#create
#                  DELETE /login(.:format)                 session#destroy
#     reservations GET    /reservations(.:format)          reservations#index
#                  POST   /reservations(.:format)          reservations#create
#  new_reservation GET    /reservations/new(.:format)      reservations#new
# edit_reservation GET    /reservations/:id/edit(.:format) reservations#edit
#      reservation GET    /reservations/:id(.:format)      reservations#show
#                  PATCH  /reservations/:id(.:format)      reservations#update
#                  PUT    /reservations/:id(.:format)      reservations#update
#                  DELETE /reservations/:id(.:format)      reservations#destroy
#            users GET    /users(.:format)                 users#index
#                  POST   /users(.:format)                 users#create
#         new_user GET    /users/new(.:format)             users#new
#        edit_user GET    /users/:id/edit(.:format)        users#edit
#             user GET    /users/:id(.:format)             users#show
#                  PATCH  /users/:id(.:format)             users#update
#                  PUT    /users/:id(.:format)             users#update
#                  DELETE /users/:id(.:format)             users#destroy
#          flights GET    /flights(.:format)               flights#index
#                  POST   /flights(.:format)               flights#create
#       new_flight GET    /flights/new(.:format)           flights#new
#      edit_flight GET    /flights/:id/edit(.:format)      flights#edit
#           flight GET    /flights/:id(.:format)           flights#show
#                  PATCH  /flights/:id(.:format)           flights#update
#                  PUT    /flights/:id(.:format)           flights#update
#                  DELETE /flights/:id(.:format)           flights#destroy
#           planes GET    /planes(.:format)                planes#index
#                  POST   /planes(.:format)                planes#create
#        new_plane GET    /planes/new(.:format)            planes#new
#       edit_plane GET    /planes/:id/edit(.:format)       planes#edit
#            plane GET    /planes/:id(.:format)            planes#show
#                  PATCH  /planes/:id(.:format)            planes#update
#                  PUT    /planes/:id(.:format)            planes#update
#                  DELETE /planes/:id(.:format)            planes#destroy
#

Rails.application.routes.draw do


  root :to => 'pages#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :reservations

  resources :users

  resources :flights

  resources :planes




  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
