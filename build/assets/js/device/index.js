/**
 * 该 javascript脚本 用于处理 设备有关的方法，比如：用户设备是否是移动设备并对其进行提示 等等(该模块依赖toast dialog模块，须在其下方进行导入) （并且也可供其他脚本调用）
*/

// 定义方法
/**
 * @function showIsMobileTip
 * @description 弹出对话框，让用户对自己的设备添加标识(该方法需在 关键字和屏幕大小无法取得帮助的情况下进行使用)
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * 该方法为内部方法（在其他地方 用不到）
 * showIsMobileTip()
 * 
 * @author MiMao
 * @version 1.0
 */
function showIsMobileTip() {
    // 获取 app中devicetip设备提示页面元素
    let app_devicetip_element = document.querySelector("#app-devicetip")
    // 获取 显示是否时移动端的界面元素
    let app_devicetip_showismobiletip_element = document.querySelector("#app-devicetip-showismobiletip")
    // 获取 computer按钮元素
    let app_devicetip_showismobiletip_computerbtn_element = document.querySelector("#app-devicetip-showismobiletip>.computer")
    // 获取 computer按钮元素
    let app_devicetip_showismobiletip_phonebtn_element = document.querySelector("#app-devicetip-showismobiletip>.phone")
    // 首先 显示是否时移动端设备提示页面（即：移除相关元素的 invisible类名)
    if(app_devicetip_element.classList.contains("invisible")){
        app_devicetip_element.classList.remove("invisible")
    }
    if(app_devicetip_showismobiletip_element.classList.contains("invisible")){
        app_devicetip_showismobiletip_element.classList.remove("invisible")
    }
    // 移除完之后，界面显示，需要对 按钮元素添加点击事件，并进行处理
    app_devicetip_showismobiletip_computerbtn_element.addEventListener('click',()=>{
        // computer
    })
    app_devicetip_showismobiletip_phonebtn_element.addEventListener('click',()=>{
        // phone
    })
}


/**
 * @function isMobile
 * @description 判断用户设备是否是移动端
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * if(!isMobile()){
 * 
 * }
 * 
 * @author MiMao
 * @version 1.0
 */
function isMobile() {
    // 首先 根据关键字 判断用户设备是否为移动端
    // 正则表达式：基础知识如下
    // 字符串的方法有 
    // 1. "".match(/正则表达式/)返回所有匹配的值(数组) 也可使用"".search(/正则表达式/)返回符合匹配的第一个值的索引(没有找到则返回-1) 、
    // 2. "".replace('查找的值'或/正则表达式/，"替换的值")
    // 移动端标识关键字（正则表达式 匹配模式：g全局匹配 i忽略大小写）
    // 定义 是否是移动端变量
    let ismobile = false
    // 移动端关键字 正则匹配表达式
    let mobilekey_regexp = /(Mobile|iPhone|iPad|iPod|Android|Linux armv8l|Linux armv7l|Linux aarch64|)/gi
    // 根据正则表达式 判断是否是移动端设备
    if (mobilekey_regexp.test(userAgent)) {
        ismobile = true
    }
    // 然后，再判断是否是移动设备，如果没有这些关键字，则通过屏幕大小来判断是否是移动设备 如果小于 768px 则提示用户 大于则判断为pc端
    if (!ismobile && window.screen.availWidth <= 768) {
        // 这时需要提示用户
        // 将用户返回操作后的值，返回至该方法
        // 首先通过，然后通过useragent来查看是否含还有 iphone等关键字如果没有则通过屏幕来查看是否是小于 768px的，
        // 否则弹出对话框让用户自己添加自己是手机还是pc端（该设置还需再页面中体现让用户可设置（对于移动端用户调至pc端需提醒用户会影响使用））
    }
    return ismobile
}



