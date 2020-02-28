class CreateAtendeesJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :atendees_joins do |t|
      t.integer :event_id, foreign_key: true, null: false
      t.integer :user_id, foreign_key: true, null: false

      t.timestamps
    end
    add_index :atendees_joins, :event_id
    add_index :atendees_joins, :user_id
  end
end
