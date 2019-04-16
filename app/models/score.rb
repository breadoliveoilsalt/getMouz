class Score < ApplicationRecord
  validates :points, numericality: { only_integer: true }

  def self.get_top_five
    self.order(points: :desc).limit(5)
  end

  def self.delete_excess_scores
    if self.count > 10
      ordered_scores = self.order(points: :desc)
      print "Ordered Scores: #{ordered_scores}"
      (10...ordered_scores.length).each do |index|
        print "Current recored: #{ordered_scores[index]}"
        ordered_scores[index].delete
      end
    end
  end


end
