json.user do
  json.extract! @user, :id, :username, :email, :profile_picture
end

json.images do
  @user.images.each do |image|
    json.set! image.id do
      json.extract! image, :image_url
    end
  end
end
