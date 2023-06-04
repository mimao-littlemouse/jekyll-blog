// 懒加载 入口文件
// 用于处理 整体懒加载业务

// 定义全局变量
// 懒加载实例集合
window.lazyLoadInstances = [];
// 其中，[]中包含的instance实例对象的 _settings.name 是实例的名称（该名称是通过 配置选项中的name属性得来的）
// 懒加载选项集合
window.lazyLoadOptions = [];
// 其中，[]中包含的option选项对象 中有name 懒加载实例名称 属性



// 定义全局 初始化懒加载选项的方法
/**
 * @function initLazyloadOption
 * @description 初始化 懒加载选项（注意：要确保每一个 lazyload_instance_name 都不同 否则只会对最后一个实例生效）
 * @param name {string} 必填选项(懒加载实例的名称 必须唯一)
 * @param container {document} 默认：document
 * @param elements_selector  {string} 默认： ".lazyload"
 * @param threshold {number} 默认：300
 * @param thresholds {string} 默认：null 
 * @param stage_classname_prefix {string} 默认："lazyload-"
 * @param cancel_on_exit {boolean} 默认：true
 * @param unobserve_entered {boolean} 默认：false
 * @param unobserve_completed {boolean} 默认：true
 * @param callback_enter {callback} 默认：null
 * @param callback_loading {callback} 默认：null
 * @param callback_loaded {callback} 默认：null
 * @param callback_finish {callback} 默认：null
 * @param callback_cancel {callback} 默认：null
 * @param callback_exit {callback} 默认：null
 * @param callback_error {callback} 默认：null
 * @param callback_applied {callback} 默认：null
 * @return {void} 无返回值
 * @example 
 * initLazyloadOption(...)
 * @author MiMao
 * @version 1.0
 */
function initLazyloadOption(name, container = document, elements_selector = ".lazyload", threshold = 300, thresholds = null, stage_classname_prefix = "lazyload-", cancel_on_exit = true, unobserve_entered = false, unobserve_completed = true, callback_enter = null, callback_loading = null, callback_loaded = null, callback_finish = null, callback_cancel = null, callback_exit = null, callback_error = null, callback_applied = null) {
    let lazyLoad_option = {
        name,
        // elements_selector选项中元素的滚动容器 默认：document
        container,

        // 要延迟加载的元素的CSS选择器，这些元素将被选择为容器对象的后代。默认：.lazy
        elements_selector,

        // 一个像素数，表示从滚动区域开始加载元素的外部距离。默认：300
        threshold,
        // 类似于 threshold，但可以接受多个值以及 px 和 % 单位。
        // 它直接映射到IntersectionObserver的rootMargin属性。
        // 因此它必须是一个语法类似于CSS margin属性的字符串。当您需要为滚动区域设置不同的threshold时，可以使用它。通过时会覆盖 threshold。
        thresholds, //例如："500px 10%"
        // 包含要加载的元素URL的数据属性的名称，不包括“data-”部分。
        // 例如，如果您的数据属性命名为“data-src”，只需传递“src”
        // data_src: "src", // 默认："src"

        // 定义 每一个 时期 的类名
        // 在应用多个背景之后应用于多个背景元素的类
        class_applied: stage_classname_prefix + "applied",
        // 元素进入视口后应用于这些元素的类
        class_entered: stage_classname_prefix + "entered",
        // 加载过程中应用于元素的类
        class_loading: stage_classname_prefix + "loading",
        // 加载完成时应用于元素的类
        class_loaded: stage_classname_prefix + "loaded",
        // 当元素导致错误时应用于该元素的类
        class_error: stage_classname_prefix + "error",
        // 在元素退出视口后应用于这些元素的类
        // 如果某个元素再次进入视口，则该类将被删除
        // unsobserve_entered选项会影响此类
        // 例如，当加载在退出之前完成加载的图像时
        class_exited: stage_classname_prefix + "exited",

        // 一个布尔值，用于定义是否取消下载仍在加载时退出视口的图像，最终恢复原始属性
        // 它只适用于图像，所以适用于img（和picture）标签，所以不适用于背景图像、iframe、对象或视频
        cancel_on_exit, // 默认未： true

        // 一个布尔值，用于定义元素进入视口后是否自动取消观察
        unobserve_entered, // <- 设置为 true，来取消观察该元素进入视图，来避免相关脚本执行多次 默认为：false
        // 一个布尔值，定义在元素加载或抛出错误后是否自动取消观测元素
        unobserve_completed, // 默认为：true

        // 一个回调函数，每当元素进入视口时都会调用的回调函数
        // 参数：DOM元素、交集观察者条目、lazylod实例
        callback_enter, // 可设置为：(el)=>{console.log("Entered", el)}

        // 一个回调函数，每当元素开始加载时都会调用它。参数：DOM元素，lazylod实例
        callback_loading, // 可设置为：(el)=>{console.log("Loading", el)}

        // 一个回调函数，每当元素加载完成时都会调用它
        // 请注意，在11.0.0之前的版本中，此选项的名称为callback_load
        // 参数：DOM元素，lazylod实例
        callback_loaded, //可设置为：(el)=>{console.log("Loaded", el)}

        // 一个回调函数，当没有更多的元素要加载并且所有元素都已下载时调用该函数
        // 参数：懒惰的实例
        callback_finish, // 可设置为：()=>{console.log("Finish")}

        // 一种回调函数，每当加载时元素加载被取消时就会调用，例如 cancel_on_exit:true
        callback_cancel, //可设置为：(el)=>{console.log("Cancelled", el)}

        // 每当元素退出视口时都会调用的回调函数
        // 参数：DOM元素、交集观察者条目、lazylod实例
        callback_exit, // 可设置为：(el)=>{console.log("Exited", el)}

        // 每当元素触发错误时都会调用的回调函数
        // 参数：DOM元素，lazylod实例
        callback_error, // 可设置为：(el)=>{console.log("Error", el)}

        // 一个回调函数，每当多个背景元素开始加载时都会调用它
        // 参数：DOM元素，lazylod实例
        callback_applied,  // 可设置为：(el)=>{console.log("Applied", el)}

    }
    // 将选项 添加到全局 选项变量列表中
    lazyLoadOptions.push(lazyLoad_option);
}

