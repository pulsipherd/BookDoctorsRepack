class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  # has_many :books
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self_linked(ids)
    ids = ids.empty? ? [0] :ids
    Book.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
