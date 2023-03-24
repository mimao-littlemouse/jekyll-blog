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
EXPOSE 4000

ENTRYPOINT [ "bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000" ]

