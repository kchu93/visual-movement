class Like < ApplicationRecord

  validates :image, uniqueness: {scope: :user}

  belongs_to :image,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: :Image

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
