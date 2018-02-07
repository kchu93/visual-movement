json.user do
  json.extract! @user, :id, :username, :email, :profile_picture
end

json.images do
  @user.images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :image_url, :author_id
    end
  end
end

json.follows @user.followers.any? {|follower| follower.id == current_user.id}

json.likes do
  @user.liked_images.each do |like|
    json.set! like.id do
      json.extract! like, :id, :image_url, :author_id
    end
  end
end
