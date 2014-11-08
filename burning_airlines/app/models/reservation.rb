# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  flight_id  :integer
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#  name       :string(255)
#

class Reservation < ActiveRecord::Base
	belongs_to :flights
end

#name for reservations
#get rid of rows and columns
