#!/bin/sh

cat << EOF
jekyll 部署到github上时，必须要保持的默认配置：

lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge

请检查_config.yml中是否配置了如下选项：
（经过对比 jekyll中默认的配置和以上配置，得出一下配置项需配置）
safe: true
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge

注意：
对于 插件，需要将其通过配置至白名单才可用
例如：
# whitelist:
#   - jekyll-seo-tag

EOF