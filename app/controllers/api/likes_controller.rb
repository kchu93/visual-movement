class Api::LikesController < ApplicationController

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.image_id = params[:image_id]

    if @like.save
      @image = @like.image
      render 'api/images/show'
    else
      render json: @like.errors.full_messages, status: 401
    end
  end


  def destroy
    @like = Like.find_by(user_id: current_user.id, image_id: params[:id])
    @image = @like.image

    if @like
      @like.destroy!
      render 'api/images/show'
    else
      render json: ["Could not find that like"], status: 400
    end
  end

end
