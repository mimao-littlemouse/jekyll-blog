/**
 * 该 javascript脚本 用于处理 刷新 app页面时的 加载动画（提升用户体验）
 * 
 * 处理 刷新或初次进入页面时，页面加载过于缓慢，通过 加载动画，减轻用户的不良体验
*/

// 定义方法
// /**
//  * @function openAppLoading
//  * @description 开启app页面加载动画
//  * @param {none} 无需传参
//  * @return {void} 无返回值
//  * 
//  * @example 
//  * 在当前 js中调用，需关闭该加载时，在 window.onload中调用 关闭方法 closeAppLoading()
//  * openAppLoading();
//  * @author MiMao
//  * @version 1.0
//  */
//  function openAppLoading() {
//     // 获取 app loading加载动画元素
//     // app loading 主体容器元素
//     let app_loading_element = document.querySelector("#app-loading")
//     // app loading 主体loading元素
//     let app_loading_app_element = document.querySelector("#app-loading-app")
//     // 获取 app_loading_element 和 app_loading_app_element 的类名列表
//     let app_loading_element_classlist = app_loading_element.classList
//     let app_loading_app_element_classlist = app_loading_app_element.classList
//     // 显示加载动画容器（即：移除loading加载容器元素的invisible类名）
//     if(app_loading_element_classlist.contains("invisible")){
//         app_loading_element.classList.remove("invisible")
//         // 显示加载动画元素（即：移除loading加载元素上的invisible类名）
//         if(app_loading_app_element_classlist.contains("invisible")){
//             app_loading_app_element.classList.remove("invisible")
//             // 然后 为 app 加载元素 添加 app-loading-animation 动画类
//             if(!app_loading_app_element_classlist.contains("app-loading-animation")){
//                 app_loading_app_element.classList.add("app-loading-animation")
//             }
//         }
//     }
// }

/**
 * @function closeAppLoading
 * @description 关闭app页面加载动画
 * @param {none} 无需传参
 * @return {void} 无返回值
 * 
 * @example 
 * 需在 window.onload中调用此关闭方法
 * window.onload = ()=>{
 *  closeAppLoading();
 * }
 * @author MiMao
 * @version 1.0
 */
function closeAppLoading() {
    // 获取元素对象
    // 获取 app 元素
    let app_element = document.querySelector("#app")
    // 获取 app loading加载动画元素
    // app loading 主体容器元素
    let app_loading_element = document.querySelector("#app-loading")
    // app loading 主体loading元素
    let app_loading_app_element = document.querySelector("#app-loading-app")

    // 获取 元素对应的类名列表
    // 获取app的类名列表
    let app_element_classlist = app_element.classList
    // 获取 app_loading_element 和 app_loading_app_element 的类名列表
    let app_loading_element_classlist = app_loading_element.classList
    let app_loading_app_element_classlist = app_loading_app_element.classList
    // 显示 app 页面
    if (app_element_classlist.contains("invisible")) {
        app_element.classList.remove("invisible")
        // 隐藏加载动画容器（即：为loading加载容器元素添加invisible类名）
        if (!app_loading_element_classlist.contains("invisible")) {
            app_loading_element.classList.add("invisible")
            // 隐藏加载动画元素（即：为loading加载元素添加invisible类名）
            if (!app_loading_app_element_classlist.contains("invisible")) {
                app_loading_app_element.classList.add("invisible")
                // 然后 为 app 中相关加载元素 移除 其中所有的 动画类（其中 目前只有 旋转器 和 mimao耳朵动画）
                // 旋转器 id="app-loading-app-spinner_grow" class="spinner-grow"
                // 旋转器 id="app-loading-app-spinner_border" class="spinner-border"
                // mimao耳朵动画类 id="mimao-container" class="app-loading-mimao_head-animation"
                // mimao耳朵动画类 id="mimao-ear1" class="app-loading-mimao_head_ear1-animation"
                // mimao耳朵动画类 id="mimao-ear2" class="app-loading-mimao_head_ear2-animation"
                // 获取 旋转器 grow 和 border 元素
                let spinner_grow_element = document.querySelector("#app-loading-app-spinner_grow")
                let spinner_border_element = document.querySelector("#app-loading-app-spinner_border")
                // 获取 mimao 头部元素 以及耳朵元素 耳朵1 和 耳朵2
                let mimao_container_element = document.querySelector("#mimao-container")
                let mimao_ear1_element = document.querySelector("#mimao-ear1")
                let mimao_ear2_element = document.querySelector("#mimao-ear2")
                // 获取对应的类名列表
                let spinner_grow_element_classlist = spinner_grow_element.classList
                let spinner_border_element_classlist = spinner_border_element.classList
                let mimao_container_element_classlist = mimao_container_element.classList
                let mimao_ear1_element_classlist = mimao_ear1_element.classList
                let mimao_ear2_element_classlist = mimao_ear2_element.classList

                // 对是否包含该类名进行判断并进行对应类名的移除
                if (spinner_grow_element_classlist.contains("spinner-grow")) {
                    spinner_grow_element.classList.remove("spinner-grow")
                }
                if (spinner_border_element_classlist.contains("spinner-border")) {
                    spinner_border_element.classList.remove("spinner-border")
                }
                if (mimao_container_element_classlist.contains("app-loading-mimao_head-animation")) {
                    mimao_container_element.classList.remove("app-loading-mimao_head-animation")
                }
                if (mimao_ear1_element_classlist.contains("app-loading-mimao_head_ear1-animation")) {
                    mimao_ear1_element.classList.remove("app-loading-mimao_head_ear1-animation")
                }
                if (mimao_ear2_element_classlist.contains("app-loading-mimao_head_ear2-animation")) {
                    mimao_ear2_element.classList.remove("app-loading-mimao_head_ear2-animation")
                }
            }
        }
    }
}


/**
 * @function setAppLoadingText
 * @description 修改app页面加载中的文字提示
 * @param {string} 文字提示 默认 空字符串
 * @return {void} 无返回值
 * 
 * @example 
 * 可在 window.onload 类似的监听事件中进行调用（来动态提示用户加载过程）
 * window.onload = ()=>{
 *  setAppLoadingText("加载完成");
 * }
 * @author MiMao
 * @version 1.0
 */
function setAppLoadingText(loading_text = "") {
    // 获取元素对象
    // 获取 app 加载页面元素上的文字提示部分元素
    let app_texttip_element = document.querySelector("#app-loading-app-text_tip")
    // 修改 提示文字
    app_texttip_element.innerText = loading_text
}

// 启用 app加载方法，并在 window.onload事件中启用 关闭app loading 加载方法，但无法做到页面一开始就可以显示加载动画，所以，有下面的方案：
// openAppLoading()
// 方案如下：
// 使该app默认一开始就是加载页面，到一定的时候，就结束加载动画即可
// 所以，openAppLoading方法 无需调用
// 只需在 监听结束时 调用 closeAppLoading 方法即可
// 可以在 加载的过程中，通过不同阶段的监听事件，来添加内容即可