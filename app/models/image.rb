class Image < ApplicationRecord

  validates :image_url, :author_id, :description, presence: true
  validates :image_url, :author_id, uniqueness:true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id
    class_name: 'User'
end
