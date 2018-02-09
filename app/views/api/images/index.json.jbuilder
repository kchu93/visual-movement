json.images do
  @images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :author_id
      json.extract! image.user, :username
      json.image_url asset_path(image.image.url(:original))
    end
  end
  json.imagearray do
    json.array! @imagearray
  end
end


json.users do
  @images.each do |image|
    json.set! image.user.id do
      json.extract! image.user, :id, :username, :profile_picture
    end
  end
end


json.followings do
  @images.each do |image|
    image.user.relationships_where_user_is_follower.each do |follower|
      json.set! follower.id do
        json.extract! follower, :follower_id, :followee_id
      end
    end
  end
end
