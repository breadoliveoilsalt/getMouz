class ScoresController < ApplicationController


  def index
    scores = Score.get_top_five
    render :json => scores
  end

  def create
    score = Score.new(score_params)
    if score.save
      Score.delete_excess_scores
    else
      render json: { errors: score.errors.full_messages }
    end

  end

  private


  def score_params
    params.permit(:points)
  end

end
