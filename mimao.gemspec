# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "mimao"
  spec.version       = "0.1.0"
  spec.authors       = ["Mi Mao"]
  spec.email         = ["mimao_littlemouse@163.com"]

  spec.summary       = "令人舒适的博客"
  spec.homepage      = "https://github.com/mimao-littlemouse/jekyll-blog"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9"

  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"

  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"

  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_runtime_dependency "jekyll-watch", "~> 2.0"

  # spec.add_runtime_dependency "jekyll-avatar", "~> 0.8"

  # spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"

  spec.add_runtime_dependency "jemoji", "~> 0.13"

  spec.add_runtime_dependency "rouge", "~> 3.3"

  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"

  spec.add_runtime_dependency "webrick", "~> 1.8"

# # 以下是github中 默认启用 不能禁用的插件
#   spec.add_runtime_dependency "jekyll-coffeescript", "~> 2.0"

#   spec.add_runtime_dependency "jekyll-default-layout", "~> 0.1"

#   spec.add_runtime_dependency "jekyll-gist", "~> 1.5"

#   spec.add_runtime_dependency "jekyll-github-metadata", "~> 2.16"

#   spec.add_runtime_dependency "jekyll-optional-front-matter", "~> 0.3"

#   spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"

#   spec.add_runtime_dependency "jekyll-readme-index", "~> 0.3"

#   spec.add_runtime_dependency "jekyll-titles-from-headings", "~> 0.5"

  spec.add_runtime_dependency "jekyll-relative-links", "~> 0.7"
  

  spec.add_development_dependency "bundler", "~> 2.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
