class RemoveFlightIdFromFlights < ActiveRecord::Migration
  def change
    remove_column :flights, :flight_id, :integer
  end
end
