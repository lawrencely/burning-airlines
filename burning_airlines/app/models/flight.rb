# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string(255)
#  origin        :string(255)
#  destination   :string(255)
#  date          :datetime
#  plane_id      :integer
#  created_at    :datetime
#  updated_at    :datetime
#

class Flight < ActiveRecord::Base
  belongs_to :planes
  has_many :reservations

  accepts_nested_attributes_for :planes, :reservations
end
