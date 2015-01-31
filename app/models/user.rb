# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  password_digest :string(255)
#

class User < ActiveRecord::Base
  has_many :reservations
	has_secure_password

	validates :name, presence: true, uniqueness: true, length: {minimum: 3}
	validates :email, presence: true, uniqueness: true
	validates_length_of :password, in: 3..20, on: :create

end
