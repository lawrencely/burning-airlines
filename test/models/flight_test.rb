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

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
