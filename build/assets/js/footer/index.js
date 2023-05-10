/**
 * 该 javascript脚本 用于处理 footer 的显示和 隐藏（提升用户体验）
 * 
 * 处理 footer 的显示 和 隐藏 以及一些逻辑业务
*/

// 定义方法
/**
 * @function enableFooterEventListener
 * @description 对于 footer 的 显示和隐藏进行监听（来切换 footer 按钮的图标）并在显示的时候，对 scroll滚动条进行处理
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * enableFooterEventListener()
 * 
 * @author MiMao
 * @version 1.0
 */
function enableFooterEventListener(){
    // 获取页尾容器元素
    let app_footer = document.querySelector("#app-footer")
    // 获取页尾容器中 页尾显示隐藏的切换按钮元素
    // let app_footer_collapse_button = document.querySelector("#app-footer-collapse-button")
    // 获取页尾容器中 页尾显示隐藏的切换按钮中的图标元素
    // 类名切换 可以是： bi-chevron-bar-up（去显示footer内容） bi-chevron-bar-down(去隐藏footer内容)
    let app_footer_collapse_button_icon = document.querySelector("#app-footer-collapse-button-icon")
    // 获取页尾内容容器元素（即：需要进行监听的元素，监听其显示与隐藏（默认隐藏））
    let app_footer_content = document.querySelector("#app-footer-content")
    
    app_footer_content.addEventListener('shown.bs.collapse', event => {
        // 切换图标 类名，来实现按钮的图标切换
        if(app_footer_collapse_button_icon.classList.contains("bi-chevron-bar-up")){
            app_footer_collapse_button_icon.classList.remove("bi-chevron-bar-up")
            app_footer_collapse_button_icon.classList.add("bi-chevron-bar-down")
        }
        // 将 页尾元素使用过渡的形式滚动到可见区域的底部
        app_footer.scrollIntoView({ behavior: "smooth", block: "end" })
    })
    app_footer_content.addEventListener('hidden.bs.collapse', event => {
        // 切换图标 类名，来实现按钮的图标切换
        if(app_footer_collapse_button_icon.classList.contains("bi-chevron-bar-down")){
            app_footer_collapse_button_icon.classList.remove("bi-chevron-bar-down")
            app_footer_collapse_button_icon.classList.add("bi-chevron-bar-up")
        }
    })
}

// 启用 footer 按钮的图标切换和事件处理
enableFooterEventListener()

