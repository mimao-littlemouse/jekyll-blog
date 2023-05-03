// 懒加载 结束文件 用于处理 实例的监听事件
/**
* 开启 懒加载 实例初始化 监听事件，对每一个 初始化的懒加载进行处理
*/
window.addEventListener(
    "LazyLoad::Initialized",
    function (e) {
      var instance = e.detail.instance;
      console.log(instance);
      lazyLoadInstances.push(instance);
    },
    false
  );