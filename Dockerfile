FROM ruby:latest
# 指定要 运行容器之后的工作目录
WORKDIR /blog
# 将Dockerfile所在目录中的blog内的所有内容都 复制到工作目录中
COPY . /blog
#更新gem源
#移除默认源
RUN gem sources --remove https://rubygems.org/
#添加阿里源
RUN gem sources -a https://gems.ruby-china.com
RUN gem install jekyll
RUN bundler install
VOLUME [ "/blog" ]
EXPOSE 4000

ENTRYPOINT [ "bundler", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000" ]

