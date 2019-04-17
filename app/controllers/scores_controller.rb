class ScoresController < ApplicationController


  def index
    scores = Score.get_top_five
    render :json => scores
  end

  def create
    binding.pry
    score = Score.new(socre_params)
    if score.save
      Score.delete_excess_scores
    else
      ender json: { errors: score.errors.full_messages }
    end

  end

  private


  def score_params
    params.permit(:points)
  end

end
