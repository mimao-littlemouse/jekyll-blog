/**
 * 该 javascript脚本 用于处理 轮播图和轮播图中指示节点的点击动态过渡（提升用户体验）
 * 
 * 处理 轮播图中指示节点的自动滚动
*/


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
 * 监听 换轮播完成时的事件 
 */
myCarousel.addEventListener('slid.bs.carousel', event => {
    // event参数 属性结构{direction:"right|left",from:0,to:1}
    // 调用 根据类名获取指定指示节点对象 的方法，来获取 指定指示节点对象
    let result = getIndicatorNodeObjectByClassName(carousel_indicators, "active")
    if (result.status) {
        // 如果获取到了 当前 指定的指示节点，则接下来进行 下面的处理 
        current_indicator = result.indicatornode
        // 调用 scrollIntoView 方法实现，点击 轮播图指示节点，并使其居中显示
        current_indicator.scrollIntoView({ behavior: "smooth", inline: "center" })
    }
})
