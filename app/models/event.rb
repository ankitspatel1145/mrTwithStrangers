class Event < ApplicationRecord

    validates :host_id, :date, :city, :state, :address, :time, :spots, :description, presence: true

    belongs_to :host,
        class_name: :User,
        foreign_key: :user_id,
        optional: true


end
