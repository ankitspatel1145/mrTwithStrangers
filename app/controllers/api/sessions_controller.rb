class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    pw = params[:user][:password]
    @user = User.find_by_credentails(username, pw)

    if @user 
      login(@user)
      render "/"
    else
      render json: ['invalid login '], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user

      render "/"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
