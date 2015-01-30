class RemoveColumnsFromReservations < ActiveRecord::Migration
  def change
    remove_columns :reservations, :columns, :integer
  end
end
