class RemoveRowsFromReservations < ActiveRecord::Migration
  def change
    remove_column :reservations, :rows, :integer
  end
end
