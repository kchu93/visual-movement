class Api::SearchesController < ApplicationController
  def index
    @users = User.where(username: params[:query])
    render :index
  end
end
