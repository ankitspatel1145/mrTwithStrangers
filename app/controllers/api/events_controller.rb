class Api::EventsController < ApplicationController

    before_action :require_logged_in, only: [:create]
    def index
        @events = Event.all
        # render 'api/events/index'
    end

    def show
        @event = Event.find(params[:id])
    end

    def create
        @event = Event.new(event_params)
        @event.host_id = current_user.id
        if @event.save!
            render "api/users/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end



    private
    def event_params
        params.require(:event).permit(
            :host_id,
            :date,
            :city,
            :state,
            :address,
            :time,
            :spots,
            :description
        )
    end
end