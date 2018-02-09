class Api::ImagesController < ApplicationController

  before_action :ensure_sign_in, only: [:create, :destroy]

  def index
    @images = Image.all
    @imagearray = @images.order(id: :desc).pluck(:id).shuffle
    render 'api/images/index'
  end


  def show
    @image = Image.find(params[:id])
    render 'api/images/show'
  end

  def create
    @image = Image.new(image_params)
    @image.author_id = current_user.id
    if @image.save
      render :show
    else
      render json: ["Please upload photo"], status: 422
    end
  end

  def update
    @image = Image.find(params[:id])

    if @image.author_id == current_user.id
      @image.update!(image_params)
      render 'api/images/show'
    else
      render json: ["Not Authorized to Edit Image"], status: 422
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
    params.require(:image).permit(:description, :image)
  end
end
