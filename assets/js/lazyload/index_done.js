// 懒加载 结束文件 用于处理 实例的监听事件
/**
* 开启 懒加载 实例初始化 监听事件，对每一个 初始化的懒加载进行处理
*/
window.addEventListener(
    "LazyLoad::Initialized",
    function (e) {
      let instance = e.detail.instance;
      // 其中，instance._settings.name 是懒加载实例的名称
      lazyLoadInstances.push(instance);
    },
    false
  );