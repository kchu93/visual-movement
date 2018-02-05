class Api::FollowsController < ApplicationController

  before_action :ensure_sign_in, only: [:create, :destroy]

  def create
    @follow = Follow.new(follower_id: current_user.id, followee_id: params[:followee_id])

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    if @follow
      @follow.delete
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
