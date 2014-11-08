class AddPlaneIdtoFlights < ActiveRecord::Migration
  def change
    add_column :flights, :flight_id, :integer
  end
end
