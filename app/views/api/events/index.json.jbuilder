

  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :date, :city, :time, :address, :host_id
    end
  end
