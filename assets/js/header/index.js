/**
 * 该 javascript脚本 用于处理 header 区域需要Javascript 进行处理的问题（提升用户体验）
 * 
 * 处理 header 区域需要处理的一些逻辑业务
*/

// 定义方法
/**
 * @function enableAppLightDarkThemeButtonClickEventListener
 * @description 处理 header中切换主题按钮的点击事件 对主题切换进行处理（并将设置好的主题存储在本地，以便减少用户重复设置的次数）
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * enableAppLightDarkThemeButtonClickEventListener()
 * 
 * @author MiMao
 * @version 1.0
 */
function enableAppLightDarkThemeButtonClickEventListener() {
    // 获取 app 元素
    let app = document.querySelector("#app")
    // 获取 切换主题按钮元素（其 类名可以是：bi-brightness-high 或 bi-brightness-low-fill ）
    let toggle_button = document.querySelector("#app-header-light-dark-button")
    // 监听 切换app主题的按钮的点击事件
    toggle_button.addEventListener('click', event => {
        // data-bs-theme="light或dark"
        // 判断目前的主题，对按钮的图标进行更换和app主题的置换
        // 获取目前 app 中的主题属性
        let app_theme_value = app.getAttribute("data-bs-theme")
        // 设置 存储在localStorage 中的 app theme的key名称（需与 localstorage/index.js中的enableAppThemeLocalstorage()中的相关变量名称一致）
        let app_theme_localstorage_key = "app_theme"
        // 如果该属性值为 light，则将将主题置换为：dark 并将按钮的图标更换为：bi-brightness-low-fill 
        if (app_theme_value == "light") {
            app.setAttribute("data-bs-theme", "dark")
            // 并将app元素的字体颜色设置为 白色，以便在dark的主题下，能看清
            if (!app.classList.contains("text-white")) {
                app.classList.add('text-white')
            }
            // 并将按钮的字体颜色设置为 白色
            if (!toggle_button.classList.contains("text-white")) {
                toggle_button.classList.add("text-white")
            }
            if (toggle_button.classList.contains("bi-brightness-high")) {
                toggle_button.classList.remove("bi-brightness-high")
                toggle_button.classList.add("bi-brightness-low-fill")
            }
            // 将用户设置的值 存放在 localStorage本地中
            localStorage.setItem(app_theme_localstorage_key, "dark")
        }
        // 如果该属性值为 dark，则将将主题置换为：light 并将按钮的图标更换为：bi-brightness-high 
        if (app_theme_value == "dark") {
            app.setAttribute("data-bs-theme", "light")
            // 移除在dark主题下设置的字体颜色 以便，不混淆其他字体颜色
            if (app.classList.contains("text-white")) {
                app.classList.remove('text-white')
            }
            // 并将按钮的字体颜色设置为 白色
            if (toggle_button.classList.contains("text-white")) {
                toggle_button.classList.remove("text-white")
            }
            if (toggle_button.classList.contains("bi-brightness-low-fill")) {
                toggle_button.classList.remove("bi-brightness-low-fill")
                toggle_button.classList.add("bi-brightness-high")
            }
            // 将用户设置的值 存放在 localStorage本地中
            localStorage.setItem(app_theme_localstorage_key, "light")
        }

        // 在点击完 按钮之后,在进行主题切换之后,高亮显示对应也要进行切换,切换如下
        // 获取所有 含有 highlighter-rouge 类名的元素(这些元素是需要进行高亮的部分)
        let doc_container_all_highlighter_elements = document.querySelectorAll(".app-main-content-doc-content .highlighter-rouge")
        // 遍历所有含有 .highlighter-rouge的标签
        for (let doc_container_all_highlighter_element of doc_container_all_highlighter_elements) {
            // 不同主题下,默认选择: light中使用default  dark中使用monokai
            // 通过判断当前app页面的 主题来决定(此外,还需在用户点击切换主题按钮的时候,需要进行 也需要根据主题更换)
            // 获取当前主题
            let app_element_theme = localStorage.getItem(app_theme_localstorage_key)
            if (app_element_theme == "light") {
                if (!doc_container_all_highlighter_element.classList.contains("highlight-default")) {
                    doc_container_all_highlighter_element.classList.add("highlight-default")
                }
            } else {
                if (!doc_container_all_highlighter_element.classList.contains("highlight-monokai")) {
                    doc_container_all_highlighter_element.classList.add("highlight-monokai")
                }
            }
        }
    })
}

// 启用  应用主题切换监听事件
enableAppLightDarkThemeButtonClickEventListener()

