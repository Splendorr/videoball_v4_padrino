source 'https://rubygems.org'

# Distribute your app as a gem
# gemspec

ruby '2.0.0'

# Server requirements
gem 'thin' # or mongrel
# gem 'trinidad', :platform => 'jruby'
# gem 'unicorn'

# Optional JSON codec (faster performance)
# gem 'oj'

# Project requirements
gem 'rake'

# Component requirements
gem 'bcrypt-ruby', :require => 'bcrypt'
gem 'sass'
gem 'haml'
# gem 'dm-sqlite-adapter'
gem 'dm-validations'
gem 'dm-timestamps'
gem 'dm-migrations'
gem 'dm-constraints'
gem 'dm-aggregates'
gem 'dm-types'
gem 'dm-core'

gem 'foreman'

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

group :production do
  gem 'pg'
  gem 'do_postgres'
  gem 'dm-postgres-adapter'
end