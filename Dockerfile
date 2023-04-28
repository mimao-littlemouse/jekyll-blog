FROM ruby:latest
# 指定要 运行容器之后的工作目录
WORKDIR /blog
# 将Dockerfile所在目录中的blog内的所有内容都 复制到工作目录中
COPY . /blog
#更新gem源为：https://gems.ruby-china.com
RUN bundle config set --global mirror.https://rubygems.org https://gems.ruby-china.com
# RUN bundle add webrick
RUN git config --global --add safe.directory /blog
RUN bundle lock
RUN bundle install

VOLUME [ "/blog" ]

# 构建时 不需要端口，所以 构建时 请注释
# 开发
# EXPOSE 4200
# 生产
# EXPOSE 4000

# 运行
# ENTRYPOINT [ "/bin/bash", "script/serve" ]
# 构建
ENTRYPOINT [ "/bin/bash", "script/build" ]

