class Score < ApplicationRecord
  validates :points, numericality: { only_integer: true }
  
end
