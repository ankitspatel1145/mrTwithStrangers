json.event do
  json.extract! @event, :id, :host_id, :date, :city, :state, :address, :time, :spots, :description
end
