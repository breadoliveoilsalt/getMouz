class ScoresController < ApplicationController


  def index
    scores = Score.get_top_five
    render :json => scores
  end

end
