class User < ApplicationRecord

  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :images,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Image'

  has_many :follows,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: 'Follow'

  has_many :followed_users,
    through: :follows,
    source: :follower


  has_many :followings,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Follow'

  has_many :following_users,
    through: :followings,
    source: :following

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
