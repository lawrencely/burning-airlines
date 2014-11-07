# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  flight_id  :integer
#  user_id    :integer
#  rows       :integer
#  columns    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Reservation < ActiveRecord::Base
	belongs_to :flights
end
