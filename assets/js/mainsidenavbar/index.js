/**
 * 该 javascript脚本 用于处理 main主体侧边导航栏 区域需要Javascript 进行处理的问题（提升用户体验）
 * 
 * 处理 main主体侧边导航栏 区域需要处理的一些逻辑业务
*/

// 定义方法
/**
 * @function enableMainSidenavbarButtonClickEventListenerToSwitchHeaderTextshow
 * @description 处理 main主体侧边导航栏中点击对应菜单实现头部面包导航的文本显示的逻辑业务
 * (依赖 主体区域侧边导航栏元素上的 mainsidenavbar类名 和 data-article-text属性 以及 头部中的面包导航元素的 site-breadcrumb-container 类名)
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * enableMainSidenavbarButtonClickEventListenerToSwitchHeaderTextshow()
 * 
 * @author MiMao
 * @version 1.0
 */
 function enableMainSidenavbarButtonClickEventListenerToSwitchHeaderTextshow() {
    // 获取 主体区域侧边导航栏中的所有导航栏元素
    let mainsidenavbarmenu_elements = document.querySelectorAll(".mainsidenavbar")
    // 首先初始化 header中面包导航中的文本
    // 将其 赋值为第一个 文本的值
    // 获取 header部分的面包导航元素
    let breadcrumb_container_element = document.querySelector(".site-breadcrumb-container")
    breadcrumb_container_element.childNodes[3].innerText = mainsidenavbarmenu_elements[0].dataset.articleText
    // 遍历每一个 侧边导航栏菜单元素，为其监听其点击事件，切换头部面包导航栏中的文本
    for(let mainsidenavbarmenu_element of mainsidenavbarmenu_elements){
        mainsidenavbarmenu_element.addEventListener('click',()=>{
            breadcrumb_container_element = document.querySelector(".site-breadcrumb-container")
            if(breadcrumb_container_element.childNodes[3].innerText != mainsidenavbarmenu_element.dataset.articleText){
                breadcrumb_container_element.childNodes[3].innerText = mainsidenavbarmenu_element.dataset.articleText
                console.log(mainsidenavbarmenu_element.dataset.articleText)
            }
        })
    }
}

/**
 * @function enableMainSidenavbarCollapseButtonClickEventListener
 * @description 对侧边导航栏中显示隐藏按钮的点击事件的监听(实现 按钮图标和侧边导航栏的显示与隐藏)
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * enableMainSidenavbarCollapseButtonClickEventListener()
 * 
 * @author MiMao
 * @version 1.0
 */
 function enableMainSidenavbarCollapseButtonClickEventListener(){
    // 获取侧边导航栏容器中 容器显示与隐藏的切换按钮元素
    // let app_mainsidenavbar_collapse_button = document.querySelector("#app-mainsidenavbar-collapse-button")
    // 获取侧边导航栏容器中 侧边导航栏容器显示隐藏的切换按钮中的图标元素
    // 类名切换 可以是： bi-chevron-bar-right（去显示侧边导航栏容器） bi-chevron-bar-left(去隐藏侧边导航栏容器)
    let app_mainsidenavbar_collapse_button_icon = document.querySelector("#app-mainsidenavbar-collapse-button-icon")
    // 获取侧边导航栏容器元素（即：需要进行监听的元素，监听其显示与隐藏（默认隐藏））
    let app_mainsidenavbar_element = document.querySelector("#app-main-side-navbar")
    // 获取主体内容容器元素
    let app_maincontent_element = document.querySelector("#app-main-content")

    app_mainsidenavbar_element.addEventListener('shown.bs.collapse', event => {
        // 切换图标 类名，来实现按钮的图标切换 并实现为其添加 d-flex 类名和 移除 d-none 并在显示的时候将中间内容区域元素的类名 col-sm-11 col-md-10 col-lg-11 还原
        if(app_mainsidenavbar_collapse_button_icon.classList.contains("bi-chevron-bar-right")){
            app_mainsidenavbar_collapse_button_icon.classList.remove("bi-chevron-bar-right")
            app_mainsidenavbar_collapse_button_icon.classList.add("bi-chevron-bar-left")
        }
        // 添加 d-flex 类名和 移除 d-none
        if(app_mainsidenavbar_element.classList.contains("d-none")){
            app_mainsidenavbar_element.classList.remove("d-none")
            app_mainsidenavbar_element.classList.add("d-flex")
        }
        // 显示的时候将中间内容区域元素的类名 col-sm-11 col-md-10 col-lg-11 还原
        if(!app_maincontent_element.classList.contains("col-sm-11")){
            app_maincontent_element.classList.add("col-sm-11")
        }
        if(!app_maincontent_element.classList.contains("col-md-10")){
            app_maincontent_element.classList.add("col-md-10")
        }
        if(!app_maincontent_element.classList.contains("col-lg-11")){
            app_maincontent_element.classList.add("col-lg-11")
        }
    })
    app_mainsidenavbar_element.addEventListener('hidden.bs.collapse', event => {
        // 切换图标 类名，来实现按钮的图标切换 并实现为其添加 d-none 类名和 移除 d-flex
        if(app_mainsidenavbar_collapse_button_icon.classList.contains("bi-chevron-bar-left")){
            app_mainsidenavbar_collapse_button_icon.classList.remove("bi-chevron-bar-left")
            app_mainsidenavbar_collapse_button_icon.classList.add("bi-chevron-bar-right")
        }
        // 添加 d-none 类名和 移除 d-flex
        if(app_mainsidenavbar_element.classList.contains("d-flex")){
            app_mainsidenavbar_element.classList.remove("d-flex")
            app_mainsidenavbar_element.classList.add("d-none")
        }
        // 隐藏的时候将中间内容区域元素的类名 col-sm-11 col-md-10 col-lg-11 移除
        if(app_maincontent_element.classList.contains("col-sm-11")){
            app_maincontent_element.classList.remove("col-sm-11")
        }
        if(app_maincontent_element.classList.contains("col-md-10")){
            app_maincontent_element.classList.remove("col-md-10")
        }
        if(app_maincontent_element.classList.contains("col-lg-11")){
            app_maincontent_element.classList.remove("col-lg-11")
        }
    })
}

// 启用  站点头部面包导航区文本随点击主体区域对于导航菜单进行切换的监听事件
enableMainSidenavbarButtonClickEventListenerToSwitchHeaderTextshow()
// 启用  侧边导航栏中显示隐藏按钮的监听事件(实现 按钮图标和侧边导航栏的显示与隐藏)
enableMainSidenavbarCollapseButtonClickEventListener()

