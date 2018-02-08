json.image do
  json.extract! @image, :id, :author_id, :description, :created_at
  json.current_user_likes @image.likes.any? {|like| like.user_id == current_user.id}
  json.image_url asset_path(@image.image.url(:original))
end

json.user do
  json.extract! @image.user, :id, :username, :profile_picture
end



# json.likes do
#   @image.likes.each do |like|
#     json.set! like.id do
#       json.extract! like, :id, :user_id, :image_id
#     end
#   end
# end

# json.likes @image.likes.any? {|like| like.user_id == current_user.id}

# json.likes do
#   json.array! @image.likes do |like|
#     json.id like.id
#   end
# end
