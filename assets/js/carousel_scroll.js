/**
 * 该 javascript脚本 用于处理 轮播图和轮播图中指示节点的点击动态过渡（提升用户体验）
 * 
 * 处理 轮播图中指示节点的自动滚动
*/

/**
 * 变量定义
 */
//#region 
/**
 * 轮播图节点对象（以 jekyll_base-carousel 为例）
*/
const myCarousel = document.getElementById('jekyll_base-carousel')
/**
 * 轮播图指示节点容器对象
 */
let carousel_indicators = myCarousel.childNodes[1]
/**
 * 当前指示节点变量(默认：轮播图的第一个指示节点对象)
 */
let current_indicator = carousel_indicators.childNodes[1]
// 滚动条可滚动区域长度
let scrollable_area_length = 0

//#endregion

/**
 * 整体业务处理（可包含下面所有）
 */

/**
 * 方法定义
 */
// #region 
/**
 * @function getIndicatorNodeObjectByClassName
 * @description 根据类名获取 轮播指示节点中含有指定类名的指示节点对象（本方法 如果含有该类名的指示节点 大于1 则获取最近获取的第一个对象 务必确保该类名 独一无二 以免造成困扰）
 * @param carouselIndicator {NodeObject}  轮播指示节点对象
 * @param className {string} 传入classList中任意一个class类名字符串；例如：<div "class="active"></div>" div元素上class属性中的 active字符串
 * @return {object} `{ status: true|false, indicatornode: object|null }` 如果发生错误，则返回 { status: true, indicatornode: object } 如果一切正常，则返回 { status: true, indicatornode: object }
 * 
 * @example 
 * let result =  getIndicatorNodeObjectByClassName(carouselIndicator,"active");
 * let indicator = null;
 * if(result.status){
 *     indicator = result.indicatornode;
 * }
 * @author MiMao
 * @version 1.0
 */
function getIndicatorNodeObjectByClassName(carouselIndicator = null, className = "") {
    // 返回对象
    let result = {
        status: false,
        indicatornode: null
    }
    // 如果 没有传入参数值，则返回 false 状态，并返回null数据（即返回result的默认值）
    if (carouselIndicator == null || className == "") {
        return result
    }
    // 如果 正常传入了参数，则 进行正常函数处理
    // handle: 根据类名获取指示节点集合
    // 首先，获取 轮播图中指示节点中所有指示节点集合
    let indicators = carouselIndicator.childNodes
    // 遍历每一个 指示节点 
    for (let i = 0; i < indicators.length - 1; i++) {
        // 获取当前 指示节点
        let current_indicator = indicators[i]
        // 获取 所有指示节点的 Node对象，并找到 Node对象中的类集合存在active的激活指示对象
        if (i % 2 != 0 && current_indicator.classList.contains("active")) {
            result.status = true
            result.indicatornode = current_indicator
            return result
        }

    }
    return result
}

/**
 * @function console_scroll_log
 * @description 这是方便进行测试额方法，传入的参数不定
 * @return {void} None
 *
 * @author MiMao
 * @version 1.0
 */
function console_scroll_log(carousel_indicators, current_indicator) {
    console.clear()
    // 打印 日志
    console.log("============== start =================")
    console.log("carousel_indicators 指示节点容器对象：", $(carousel_indicators))
    console.log("clientWidth 指示节点容器宽度：", $(carousel_indicators.clientWidth))
    console.log("offsetLeft：", $(carousel_indicators.offsetLeft))
    console.log("offsetWidth：", $(carousel_indicators.offsetWidth))
    console.log("scrollWidth 滚动条的总宽度：", $(carousel_indicators.scrollWidth))
    console.log("scrollLeft：", $(carousel_indicators.scrollLeft))
    console.log("==============================")
    console.log("current_indicator 当前指示节点对象：", $(current_indicator))
    console.log("clientWidth 当前指示节点对象宽度：", $(current_indicator.clientWidth))
    console.log("bsSlideTo 当前指示节点对象的索引（字符串）：", $(current_indicator.dataset.bsSlideTo))
    console.log("offsetLeft：", $(current_indicator.offsetLeft))
    console.log("offsetWidth：", $(current_indicator.offsetWidth))
    console.log("scrollWidth：", $(current_indicator.carousel_indicators))
    console.log("=============== end ==================")
}

/**
 * @function init_scroll
 * @description 初始化 轮播图中指示节点集合 以便获取滚动条最大的可滚动区域长度（不直接进行调用，应直接调用它的处理方法 init_scroll_handle ）
 * @param {childNode} carousel_indicators
 * @return {number} 执行成功 则返回 滚动条最大的可滚动区域长度；执行失败或出现问题（如果出现问题，则再次进行初始化，如果还是出现问题，则刷新整个窗口） 则返回0
 *
 * @author MiMao
 * @version 1.0
 */
function init_scroll(carousel_indicators) {
    let scrollWidth = carousel_indicators.scrollWidth
    let scrollLeft = carousel_indicators.scrollLeft
    let scrollLeft_temp = 0
    carousel_indicators.scrollTo({
        left: scrollWidth,
        behavior: "smooth"
    })
    // 获取 传入对象的scrollLeft ，在处理完初始化动画之后，并进行返回
    scrollLeft_temp = carousel_indicators.scrollLeft
    console.log(typeof(scrollLeft_temp), " ", scrollLeft_temp)
    // 当 待返回值 不等于 0 并且 不等于 开始之前的scrollLeft的时候（即：确保获取到的 scrollLeft是最新的滚动条可滚动区域长度的最大值）
    if (scrollLeft_temp != 0) {
        carousel_indicators.scrollTo({
            left: scrollLeft,
            behavior: "smooth"
        })
        return scrollLeft_temp
    }
    return 0
}

/**
 * @function init_scroll_handle
 * @description  init_scroll的处理方法
 * @param {childNode} carousel_indicators
 * @return {void} None
 * 
 * @example init_scroll_handle(carousel_indicators)
 * @author MiMao
 * @version 1.0
 */
function init_scroll_handle(carousel_indicators) {
    // 初始化 滚动条（以便 获取滚动条最大的可滚动区域长度 并动画显示 整个文章的所有章节）
    scrollable_area_length = init_scroll(carousel_indicators)
    console.log("init_scroll_handler：", carousel_indicators)
    if (scrollable_area_length == 0) {
        // 如果出现问题，则再次进行初始化，如果还是出现问题，则刷新整个窗口
        // 执行成功，则不进行任何 动作,继续处理业务
        scrollable_area_length = init_scroll(carousel_indicators)
        if (scrollable_area_length == 0) {
            // window.location.reload()
        }
    }
}



//#endregion

/**
 * 业务初始化区域
 */
//#region 
// 初始化 滚动条
init_scroll(carousel_indicators)

//#endregion

/**
 * 监听事件
 */
//#region 
// 监听 轮播图指示节点的宽度变化
// 选择需要观察变动的节点
// 当观察到变动时执行的回调函数
// observe = overwriteMutationObserver(carousel_indicators, () => {
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// }, true, false, false,["clientWidth"])


// 监听 换轮播完成时的事件
myCarousel.addEventListener('slid.bs.carousel', event => {
    // 通过 事件传回来的event，来获取 轮播图滑动方向 以及获取 以0开始的索引（从之前的索引 到当前的索引值）
    // let scroll_direction = event.direction
    // let scroll_from = event.from
    // let scroll_to = event.to
    // 调用 根据类名获取指定指示节点对象 的方法，来获取 指定指示节点对象
    let result = getIndicatorNodeObjectByClassName(carousel_indicators, "active");
    if (result.status) {
        // 如果获取到了 当前 指定的指示节点，则接下来进行 下面的处理 
        // current_indicator = result.indicatornode
        // 当前 指示节点 宽度
        // current_indicator_clientWidth = current_indicator.clientWidth
        // current_indicator_margin = 6 //margin: 0 3px;
        // current_indicator_width = current_indicator_clientWidth + current_indicator_margin
        // 调式
        // console_scroll_log(carousel_indicators,current_indicator)
        // 根据 direction 来 判断 滚动条滚动的方向 （一般 滚动条的滚动方向与 direction相反）
        // 如果 direction是right，则 滚动条需要向左滚动，所以 需要减去 (scroll_from - scroll_to)*current_indicator_width
        // 如果 direction是left，则 滚动条需要向右滚动，所以 需要加上 (scroll_to - scroll_from)*current_indicator_width
        current_indicator.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
})

//#endregion