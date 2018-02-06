json.image do
  json.extract! @image, :id, :image_url, :author_id, :created_at
end

json.user do
  json.extract! @image.user, :id, :username, :profile_picture
end
