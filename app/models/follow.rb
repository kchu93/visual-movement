class Follow < ApplicationRecord

  validates :follower, uniqueness: {scope: :followed_user}


  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'User'

  belongs_to :followed_user,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: 'User'
end
