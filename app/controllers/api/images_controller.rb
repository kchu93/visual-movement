class Api::ImagesController < ApplicationController

  before_action :ensure_sign_in, only: [:create, :destroy]

  def index
    @images = Image.all
    render 'api/images/index'
  end


  def show
    @image = Image.find(params[:id])
    render json: @image
  end

  def create
    @image = Image.new(image_params)
    @image.author_id = current_user.id
    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status: 401
    end
  end

  def update
    @image = Image.find(params[:id])

    if @image.author_id == current_user.id
      @image.update(image_params)
      render json: @image
    else
      render json: @image.errors.full_messages, status: 401
    end
  end


  def destroy
    @image = Image.find(params[:id])

    if @image.author_id == current_user.id
      @image.delete
      render json: {}
    else
      render json: ["Cannot delete iamge"], status: 401
    end
  end


  private

  def image_params
    params.require(:image).permit(:image_url, :author_id, :description)
  end
end
