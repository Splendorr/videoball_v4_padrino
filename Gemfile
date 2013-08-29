source 'https://rubygems.org'

# Distribute your app as a gem
# gemspec

# Server requirements
gem 'thin' # or mongrel
# gem 'trinidad', :platform => 'jruby'

# Optional JSON codec (faster performance)
# gem 'oj'

# Project requirements
gem 'rake'

# Component requirements
gem 'sass'
gem 'haml'
gem 'dm-sqlite-adapter'
gem 'dm-validations'
gem 'dm-timestamps'
gem 'dm-migrations'
gem 'dm-constraints'
gem 'dm-aggregates'
gem 'dm-types'
gem 'dm-core'

# Test requirements
gem 'mocha', :group => 'test'
gem 'riot', :group => 'test'
gem 'rack-test', :require => 'rack/test', :group => 'test'

# Padrino Stable Gem
gem 'padrino', '0.11.3'

# Or Padrino Edge
# gem 'padrino', :github => 'padrino/padrino-framework'

# Or Individual Gems
# %w(core gen helpers cache mailer admin).each do |g|
#   gem 'padrino-' + g, '0.11.3'
# end

# To fix Heroku, based on this suggestion: http://stackoverflow.com/questions/15550624/an-error-occurred-while-installing-sqlite3-1-3-7-and-bundler-cannot-continue

group :development, :test do 
  gem 'dm-sqlite-adapter'
end

# Heroku
gem 'dm-postgres-adapter', :group => :production