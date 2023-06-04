/**
 * 该 javascript脚本 用于处理 本地存储的问题（提升用户体验）
 * 
 * 处理 本地存储变量的业务
*/

// 定义方法
/**
 * @function enableAppThemeLocalstorage
 * @description 开启 app主题本地存储（将会获取本地存储的主题变量，将该变量设置到app的属性中即可，以便其他方法进行逻辑业务，减少与其他方法产生联系）
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * enableAppThemeLocalstorage()
 * 只需要在 onload事件中开启该方法，并在header中的主题切换方法中(header/index.js)，将每次切换时的值用localstorage.setItem()存储在本地
 * @author MiMao
 * @version 1.0
 */
 function enableAppThemeLocalstorage(){
    // 获取 app 元素
    let app = document.querySelector("#app")
    // 获取 切换主题按钮元素（其 类名可以是：bi-brightness-high 或 bi-brightness-low-fill ）
    let toggle_button = document.querySelector("#app-header-light-dark-button")
    // 获取目前 app 中的主题属性
    let app_theme_value = app.getAttribute("data-bs-theme")
    // 设置 存储在localStorage 中的 app theme的key名称（需与 header/index.js中enableAppLightDarkThemeButtonClickEventListener()相关变量名称一致）
    let app_theme_localstorage_key = "app_theme"
    let app_theme_localstorage_value = localStorage.getItem(app_theme_localstorage_key)
    // 如果 存在 并且值为light或dark中的一个，就将该值覆盖app中已经设置的属性默认值（来达到减少用户重新设置的目的）
    if(app_theme_localstorage_value && ( app_theme_localstorage_value == "light" || app_theme_localstorage_value == "dark" )){
        // 如果两个值不一致，才进行主题置换
        if(app_theme_value != app_theme_localstorage_value){
            app.setAttribute("data-bs-theme",app_theme_localstorage_value)
            // 如果 app 中属性设置为了 dark，则将 app中的字体颜色设置为 白色，并将按钮的颜色也设置为白色
            if(app_theme_localstorage_value == "dark"){
                // 并将app元素的字体颜色设置为 白色，以便在dark的主题下，能看清
                if(!app.classList.contains("text-white")){
                    app.classList.add('text-white')
                }
                // 并将按钮的字体颜色设置为 白色
                if(!toggle_button.classList.contains("text-white")){
                    toggle_button.classList.add("text-white")
                }
            }else{
                // 否则，将上方设置的类名去掉
                if(app.classList.contains("text-white")){
                    app.classList.remove('text-white')
                }
                // 并将按钮的字体颜色设置的类 去掉
                if(toggle_button.classList.contains("text-white")){
                    toggle_button.classList.remove("text-white")
                }
            }
        }
    }
}