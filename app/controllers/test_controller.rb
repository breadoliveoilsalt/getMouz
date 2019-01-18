class TestController < ApplicationController

  def test_message
    render json: {"Message": "You made it to the Rails API Test Controller"}
  end

end
