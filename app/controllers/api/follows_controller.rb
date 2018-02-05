class Api::FollowsController < ApplicationController

  before_action :ensure_sign_in, only: [:create, :destroy]

  def create

    # @follow = Follow.new(follow_params)
    # @follow.follower_id = current_user.id

    @follow = current_user.follows.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows.find_by(id: params[:id])

    if @follow
      @follow.delete!
      render '/users/show'
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
