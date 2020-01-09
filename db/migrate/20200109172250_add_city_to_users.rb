class AddCityToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :city, :string, null: false
    add_index :users, :city
  end
end
