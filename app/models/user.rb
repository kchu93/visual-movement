class User < ApplicationRecord

  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}


  has_many :images,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Image'

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :liked_images,
    through: :likes,
    source: :image


  has_many :relationships_where_user_is_follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :relationships_where_user_is_followed,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :users_i_follow,
    through: :relationships_where_user_is_follower,
    source: :followed_user

  has_many :followers,
    through: :relationships_where_user_is_followeds,
    source: :follower


  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
