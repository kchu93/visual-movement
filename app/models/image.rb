class Image < ApplicationRecord

  validates :author_id, :image, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :likes,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: :Like

  has_many :user_likes,
    through: :likes,
    source: :user


  has_attached_file :image, default_url: "/assets/images/bambooblack.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
