// 关于自定义 懒加载 代码书写 和 效果添加 模板
// 可参考：https://www.andreaverlicchi.eu/vanilla-lazyload/


// 其中，lazyload 的实例方法有：

// 在页面中添加或删除DOM元素后，更新LazyLoad
// 让LazyLoad重新检查DOM中容器中的elements_selector元素
// update()
// 提前加载所有剩余元素
// 立即加载所有惰性元素并停止观察它们，无论它们是在视口内部还是外部，无论它们是否隐藏或可见
// loadAll()
// 在软页面导航（SPA）发生之前重置DOM，例如使用TurboLinks
// 将DOM恢复到其原始状态
// 请注意，它不会破坏LazyLoad，所以您可能希望将其与destroy（）一起使用
// restoreAll()	
// 释放一些内存。特别适用于单页应用程序
// 销毁实例，取消设置实例变量并删除侦听器
// destroy()
// 其中，该类的静态方法有：（即：实例 或 类名 皆可调用）
// 例如：LazyLoad.load(element, settings)
// load(element, settings)
// 在鼠标悬停时或在与“进入视口”不同的任何其他事件中加载元素
// 立即加载惰性元素
// 您可以在设置参数中传递自定义选项
// 请注意，elements_selector选项没有任何作用，因为您将元素作为参数传递。还要注意，此方法对特定元素只有一次效果。
// resetStatus(element)
// 要告诉LazyLoad再次考虑此元素，
// 例如：如果在加载上一个数据src后更改了数据src属性，请调用此方法，然后再在LazyLoad实例上调用update（）。
// 重置给定元素的内部状态
// 属性
// 您可以在任何LazyLoad实例上使用以下属性
// loadingCount	
// 当前正在从网络下载的元素的数量（仅限于由LazyLoad实例管理的元素）
// 这对于了解销毁此LazyLoad实例是否安全特别有用
// toLoadCount
// 尚未LazyLoad的元素数量（仅限于LazyLoad实例管理的元素）


window.lazyFunctions = {
    example_function: function (element) {
      // 可对元素进行一系列的操作
      element.style.color = "red";
      console.log("foo");
    }
  };
  // 上面定义的函数的使用方法，如下
  // <div class="lazy" data-lazy-function="example_function">当我出现在视图上时，我就会执行example_function函数，对自己或其他兄弟姐妹一系列操作</div>

  // 定义元素进行懒加载的时候，每一个时期可以执行的函数，该函数，可以拥有两个参数：
  // element 自己本身
  // lazy-load 实例（一般用到 element 即可）
  var callback_enter = function (element) {
    console("🔑 ENTERED", element.src);
  };
  // 等等（共有 8个，但常用的只有 7个）
  // callback_enter
  // callback_exit      
  // callback_cancel,
  // callback_loading
  // callback_loaded
  // callback_error
  // callback_finish
  // 外加 多个背景图进行加载的时候会加载的回调函数：callback_applied
  // 它们默认 null ，不执行任何函数，但可以在 lazyLoadOptions中进行设定


  // 打开 该定义的函数的方式
  function executeLazyScript(element) {
    logElementEvent("🔑 ENTERED", element);
    var lazyFunctionName = element.getAttribute("data-lazy-function");
    var lazyFunction = lazyFunctions[lazyFunctionName];
    if (!lazyFunction) return;
    lazyFunction(element);
  }

  window.lazyLoadInstances = [];
  window.lazyLoadOptions = [
    {
      // elements_selector选项中元素的滚动容器 默认：document
      container: document.getElementById("results1"),

      // 要延迟加载的元素的CSS选择器，这些元素将被选择为容器对象的后代。默认：.lazy
      elements_selector: ".lazy",

      // 一个像素数，表示从滚动区域开始加载元素的外部距离。默认：300
      threshold: 300, 
      // 类似于 threshold，但可以接受多个值以及 px 和 % 单位。
      // 它直接映射到IntersectionObserver的rootMargin属性。
      // 因此它必须是一个语法类似于CSS margin属性的字符串。当您需要为滚动区域设置不同的threshold时，可以使用它。通过时会覆盖 threshold。
      thresholds: null, //例如："500px 10%"
      // 包含要加载的元素URL的数据属性的名称，不包括“data-”部分。
      // 例如，如果您的数据属性命名为“data-src”，只需传递“src”
      data_src: "src", // 默认："src"

      // 定义 每一个 时期 的类名
      // 在应用多个背景之后应用于多个背景元素的类（它们 默认：没有 lz-前缀，你可以添加其前缀，更好 书写 css代码，来实现不同时期 该元素的样式）
      class_applied: "lz-applied",
      // 加载过程中应用于元素的类
      class_loading: "lz-loading",
      // 加载完成时应用于元素的类
      class_loaded: "lz-loaded",
      // 当元素导致错误时应用于该元素的类
      class_error: "lz-error",
      // 元素进入视口后应用于这些元素的类
      class_entered: "lz-entered",
      // 在元素退出视口后应用于这些元素的类
      // 如果某个元素再次进入视口，则该类将被删除
      // unsobserve_entered选项会影响此类
      // 例如，当加载在退出之前完成加载的图像时
      class_exited: "lz-exited",
      // 一个布尔值，用于定义是否取消下载仍在加载时退出视口的图像，最终恢复原始属性
      // 它只适用于图像，所以适用于img（和picture）标签，所以不适用于背景图像、iframe、对象或视频
      cancel_on_exit: true, 

      // 一个布尔值，用于定义元素进入视口后是否自动取消观察
      unobserve_entered: true, // <- 设置为 true，来取消观察该元素进入视图，来避免相关脚本执行多次
      // 一个布尔值，定义在元素加载或抛出错误后是否自动取消观测元素
      unobserve_completed: true, 
      // 每当元素进入视口时都会调用的回调函数
      // 参数：DOM元素、交集观察者条目、lazylod实例
      callback_enter: null, // 可设置为：(el)=>{console.log("Entered", el)}
      // 每当元素退出视口时都会调用的回调函数
      // 参数：DOM元素、交集观察者条目、lazylod实例
      callback_exit: null, // 可设置为：(el)=>{console.log("Exited", el)}
      // 一个回调函数，每当元素开始加载时都会调用它。参数：DOM元素，lazylod实例
      callback_loading: null, // 可设置为：(el)=>{console.log("Loading", el)}
      // 一种回调函数，每当加载时元素加载被取消时就会调用，例如 cancel_on_exit:true
      callback_cancel: null, //可设置为：(el)=>{console.log("Cancelled", el)}
      // 一个回调函数，每当元素加载完成时都会调用它
      // 请注意，在11.0.0之前的版本中，此选项的名称为callback_load
      // 参数：DOM元素，lazylod实例
      callback_loaded: null, //可设置为：(el)=>{console.log("Loaded", el)}
      // 每当元素触发错误时都会调用的回调函数
      // 参数：DOM元素，lazylod实例
      callback_error: null, // 可设置为：(el)=>{console.log("Error", el)}
      // 一个回调函数，每当多个背景元素开始加载时都会调用它
      // 参数：DOM元素，lazylod实例
      callback_applied: null,  // 可设置为：(el)=>{console.log("Applied", el)}
      // 一个回调函数，当没有更多的元素要加载并且所有元素都已下载时调用该函数
      // 参数：懒惰的实例
      callback_finish: null, // 可设置为：()=>{console.log("Finish")}

      // 分配上面定义的回调
      // 定义 每一个 时期时 需要执行的函数
      callback_enter: callback_enter,
      callback_exit: null,
      callback_cancel: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_applied: null
    },
    {
      // 这是 第二个 实例的 选项设置
      // 例如：
      container: document.getElementById("results2"),
      class_applied: "lz-applied",
      class_loading: "lz-loading",
      class_loaded: "lz-loaded",
      class_error: "lz-error",
      class_entered: "lz-entered",
      class_exited: "lz-exited",
      // 分配上面定义的回调
      callback_enter: callback_enter,
      callback_exit: callback_exit,
      callback_loading: callback_loading,
      callback_loaded: callback_loaded,
      callback_error: callback_error,
      callback_finish: callback_finish
    }
  ];
  window.addEventListener(
    "LazyLoad::Initialized",
    function (e) {
      var instance = e.detail.instance;
      console.log(instance);
      lazyLoadInstances.push(instance);
    },
    false
  );

 