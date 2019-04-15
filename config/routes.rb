Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get "/api/getMessage", to: "test#test_message"
  get "/api/scores", to: "scores#index"
  post "/api/scores", to: "scores#create"

end
