#!/bin/sh

# 开发环境 serve_dev

# 开发环境下的运行jekyll（由于 jekyll服务是先构建，再运行服务，所以得区分不同环境下的运行）
# 设定 自动刷新浏览器 自动打开浏览器 指定读取开发环境下的配置文件
# 还可指定的选项有：
# 设定 主机名
# --host 127.0.0.1
# 设定 端口
# --port 4000
# 启用安全模式（用于 模拟部署至github后的效果）
# --safe 可在_config中配置（开发环境 最好采用默认：false）
# 显示目录列表
# --show-dir-listing 可在_config中配置
# 用于生成 liquid配置文件，以鉴定站点性能瓶颈
# --profile 可在config中进行配置
# 提升站点性能，进行增量构建（只对更改的页面和帖子进行构建）
# --incremental 可在config中进行配置
# 指定日志级别（ info(默认), warn, or error）
# JEKYLL_LOG_LEVEL=info
# 打印详细输出
# --verbose 可在config中进行配置
# 不输出，开启静音模式
# --quiet 可在config中进行配置
# 出现错误时显示完整的回溯
# --trace
# 在生成中使用特定的环境值(默认：development)
# JEKYLL_ENV=development
# 在修改文件时启用站点的自动重新生成
# --watch 在serve中默认开启（如需取消，可以带上: --no-watch）

jekyll_env="development"
github_token="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"

# 此外，在开发环境中，特意设置与生产环境下的端口不同，开发环境，使用4200端口 生产环境使用：4000端口（推荐在配置中指定）
# 对于 可直接在配置文件中，进行配置的选项，推荐在配置中进行配置（便于管理配置）

JEKYLL_ENV=${jekyll_env} JEKYLL_GITHUB_TOKEN=${github_token} bundle exec jekyll serve --livereload --open-url --trace --config _config-dev.yml