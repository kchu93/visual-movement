class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    @followees = @user.users_i_follow_ids

    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render 'api/users/show'
    else
      render json: ["Nobody signed in"], status: 401
    end
  end


end
