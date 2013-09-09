class Post
  include DataMapper::Resource

  # property <name>, <type>
  property :id, Serial
  property :title, String
  property :body, Text
  property :created_at, DateTime
  property :updated_at, DateTime

  belongs_to :account, :required => false
  validates_presence_of :title
  validates_presence_of :body
end
