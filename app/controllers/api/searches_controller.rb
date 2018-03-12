class Api::SearchesController < ApplicationController
  def index
    # @users = User.where(username: params[:query])
    if params[:query]
      @users = User.where("lower(username) LIKE ?", "%" + params[:query].downcase.split("").join("%") + "%")
    else
      @users = User.all
    end
  end
end
