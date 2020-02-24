class Api::EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # before_action :require_logged_in, only: [:create]
    before_action :set_event, only: [:show, :update, :destroy]
    def index
        @events = Event.all
        # render 'api/events/index'
    end

    def show
        @event = Event.find(params[:id])
    end

    def create
        @event = Event.new(event_params)
        debugger
        @event.host_id = 3
        # @event.host_id = current_user.id
        if @event.save!
            render "api/users/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event.destroy
        head :no_content
    end



    private
    def set_event  
        @event = Event.find(params[:id])
    rescue
        render json: ['Event not found'], status: :not_found
    end
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