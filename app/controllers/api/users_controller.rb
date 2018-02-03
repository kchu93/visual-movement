class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = selected_user
    if @user && @user.update(user_params)
      render :show
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = selected_user
    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def destroy
    @user = selected_user
    if @user
      @user.destroy
      render :show
    else
      render ['Could not find user']
    end
  end

  def follow
    @follow = Follow.create(following_id: current_user.id, follower_id: selected_user.id)
    render json: {follower_id: @follow.follower_id}
  end


  def unfollow
    @follow = Follow.find_by(following_id: current_user.id, follower_id: selected_user.id)
    @follow.destroy!
    render json: {following_id: @follow.following_id}
  end



  private

  def selected_user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :profile_picture)
  end

end
