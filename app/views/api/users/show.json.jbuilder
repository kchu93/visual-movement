json.user do
  json.extract! @user, :id, :username, :email, :profile_picture
end

json.images do
  @user.images.reverse.each do |image|
    json.set! image.id do
      json.extract! image, :id, :author_id
      json.image_url asset_path(image.image.url(:original))
    end
  end
end


json.following_images do
  @user_followings_images.each do |following_images|
    following_images.each do |image|
      json.set! image.id do
        json.extract! image, :id, :image
      end
    end
  end
end

json.follows @user.followers.any? {|follower| follower.id == current_user.id}

json.likes do
  @user.liked_images.each do |like|
    json.set! like.id do
      json.extract! like, :id, :author_id, :image
    end
  end
end
