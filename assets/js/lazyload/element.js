/**
 * 该 javascript脚本 用于处理 element 懒加载（提升用户体验）
 * 
 * 处理 指定 id选择器容器中 带有 lazyload-element 类名 的 元素 进行懒加载并提供 对应的动作(即：执行对应函数 处理各个阶段元素的变化)
 * 当然，lazyload-element 类名 也可自定义，具体情况见下方：
*/

let lazyload_handle_type = "element"

// 处理 懒加载 业务
// 根据id选择器 对指定容器内带有lazyload-element类名的图片进行懒加载并处理各个阶段的动作
// var callback_enter = function (element) {
//   var lazyFunctionName = element.getAttribute("data-lazy-function");
//   var lazyFunction = lazyFunctions[lazyFunctionName];
//   if (!lazyFunction) return;
//   lazyFunction(element);
// };




