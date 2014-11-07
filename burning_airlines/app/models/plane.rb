# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  rows       :integer
#  columns    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Plane < ActiveRecord::Base
end
