class AtendeesJoin < ApplicationRecord

  belongs_to :event,
    class_name: :AtendeesJoin,
    foreign_key: :event_id

  belongs_to :user,
    class_name: :AtendeesJoin,
    foreign_key: :user_id
  
end
