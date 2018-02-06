class Image < ApplicationRecord

  validates :image_url, :author_id, presence: true
  validates :image_url, uniqueness:true

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

  #
  # has_attached_file :picture, default_url: "missing.png"
  # validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

end
