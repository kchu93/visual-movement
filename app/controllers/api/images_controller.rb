class Api::ImagesController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @images = Image.all
    render json: @images 
  end


  def show
    @image = Image.find(params[:id])
    render json: @image
  end

  def create
    @image = Image.new(image_params)

    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status: 401
    end
  end


  private

  def image_params
    params.require(:image).permit(:image_url, :author_id)
  end
end
