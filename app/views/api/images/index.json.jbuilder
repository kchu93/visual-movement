@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :image_url, :author_id
    json.set! :username, image.user.username
  end
end
