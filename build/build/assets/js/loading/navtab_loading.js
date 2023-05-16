/**
 * 该 javascript脚本 用于处理 切换nav-tab时，对于内容显示时，出现短暂过渡（为了避免用户误点其他选项而造成内容卡顿 从而提升用户体验 特此对切换加载时进行 用户加载提示处理）
 * 
 * 处理 nav-tab 切换时 造成的延迟 使用 loading 进行提示，并避免用户误点其他选项造成的卡顿
*/

// 定义方法
/**
 * @function handleNavTabLoading
 * @description 处理 nav-tab的切换加载动画
 * @param {none} 无需传参
 * @return {void} 无返回值
 * 
 * @example 
 * handleNavTabLoading();
 * @author MiMao
 * @version 1.0
 */
function handleNavTabLoading() {
    // 定义需要进行 处理的加载 类名
    let include_classname = "nav-tab-loading"
    let include_selector = "."+include_classname
    const nav_tabs = document.querySelectorAll(include_selector)
    // 获取 loading加载动画元素
    let app_loading_element = document.querySelector("#app-loading")
    let app_loading_navtab_element = document.querySelector("#app-loading-navtab")
    // 获取 app_loading_element 和 app_loading_navtab_element 的类名列表
    let app_loading_element_classlist = app_loading_element.classList
    let app_loading_navtab_element_classlist = app_loading_navtab_element.classList
    for(let tab of nav_tabs){
        tab.addEventListener('hide.bs.tab', event => {
            // 显示加载动画容器（即：移除loading加载容器元素的invisible类名）
            if(app_loading_element_classlist.contains("invisible")){
                app_loading_element.classList.remove("invisible")
                 // 显示加载动画元素（即：移除loading加载元素上的invisible类名）
                if(app_loading_navtab_element_classlist.contains("invisible")){
                    app_loading_navtab_element.classList.remove("invisible")
                }
                // 然后，为 navtab 元素添加 navtab-loading-animation 动画类
                if(!app_loading_navtab_element_classlist.contains("navtab-loading-animation")){
                    app_loading_navtab_element.classList.add("navtab-loading-animation")
                }
            }
        })
        tab.addEventListener('shown.bs.tab', event => {
            setTimeout(() => {
                // 关闭加载动画容器（即：为loading加载容器元素添加invisible类名）
                if(!app_loading_element_classlist.contains("invisible")){
                    app_loading_element.classList.add("invisible")
                    // 关闭加载动画元素（即：移除loading加载元素上的invisible类名）
                    if(!app_loading_navtab_element_classlist.contains("invisible")){
                        app_loading_navtab_element.classList.add("invisible")
                    }
                    // 然后， 移除 navtab 上的 navtab-loading-animation 动画类
                    if(app_loading_navtab_element_classlist.contains("navtab-loading-animation")){
                        app_loading_navtab_element.classList.remove("navtab-loading-animation")
                    }
                }
            }, 500);
        })
    }

}

// 启用 navtab loading 加载
handleNavTabLoading()