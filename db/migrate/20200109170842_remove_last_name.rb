class RemoveLastName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username, :string
    remove_column :users, :last_name, :string
    remove_column :users, :phone_number, :string
    remove_column :users, :description, :text

  end
end
