json.images do
  @images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :image_url, :author_id
    end
  end
end


json.users do
  @images.each do |image|
    json.set! image.user.id do
      json.extract! image.user, :id, :username, :profile_picture
    end
  end
end
