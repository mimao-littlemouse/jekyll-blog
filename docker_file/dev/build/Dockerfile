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
# 此外，在开发环境中，特意设置与生产环境下的端口不同，开发环境，使用4200端口 生产环境使用：4000端口
EXPOSE 4200

ENTRYPOINT [ "script/build_dev" ]

