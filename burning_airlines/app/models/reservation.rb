class Reservation < ActiveRecord::Base
	belongs_to :flights
end
