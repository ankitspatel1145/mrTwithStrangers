class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false, foreign_key: true
      t.date :date, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :address, null: false
      t.time :time, null: false
      t.integer :spots, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :events, :host_id
    add_index :events, :city
    add_index :events, :date
    add_index :events, :spots
  end
end
