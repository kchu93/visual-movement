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

json.follows do
  @user.relationships_where_user_is_follower.each do |follower|
    json.set! follower.id, {follow_id: follower.id, followee_id: follower.followee_id}
  end
end
