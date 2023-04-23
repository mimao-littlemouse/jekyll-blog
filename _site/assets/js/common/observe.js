/**
 * @function overwriteMutationObserver
 * @description  重写观察方法
 * @param {childNode} targetObject
 * @param {callback} 观察方法的回调函数 (mutationsList, observer)=>{}
 * @param {boolean} attributes 是否观察 目标属性变动
 * @param {boolean} childList 是否观察 目标子节点的变化，是否有添加或者删除
 * @param {boolean} subtree 是否观察 后代节点，默认为 false
 * @return {MutationObserver} observer 一个新的、包含监听 DOM 变化回调函数的 MutationObserver 对象
 * 
 * @example 
 * 方法书写方式：
 * observe = overwriteMutationObserver(carousel_indicators,()=>{
 *  for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
 * },true,false,false)
 * 
 * 断开观察：
 * observer.disconnect();
 * 
 * callback中的参数介绍：
 * mutationsList：所有被触发改动的 MutationRecord 对象数组
 * observe：调用该回调函数的 MutationObserver 对象
 * 
 * MutationObserver 对象的方法有：
 * observe(target[, options])方法  配置了 MutationObserver 对象的回调方法以开始接收与给定选项匹配的 DOM 变化的通知
 *      target：DOM 树中的一个要观察变化的 DOM Node (可能是一个 Element)，或者是被观察的子节点树的根节点
 *      options：此对象的配置项描述了 DOM 的哪些变化应该报告给 MutationObserver 的 callback。当调用 observe() 时，childList、attributes 和 characterData 中，
 *      必须有一个参数为 true。否则会抛出 TypeError 异常。
 *      options 的属性如下：
 *          subtree 可选
 *          当为 true 时，将会监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target。默认值为 false。
 *          childList 可选
 *          当为 true 时，监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）。默认值为 false。
 *          attributes 可选
 *          当为 true 时观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue，默认值则为 false。
 *          attributeFilter 可选
 *          一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知。
 *          attributeOldValue 可选
 *          当为 true 时，记录上一次被监听的节点的属性变化；可查阅监听属性值了解关于观察属性变化和属性值记录的详情。默认值为 false。
 *          characterData 可选
 *          当为 true 时，监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue，默认值则为 false
 *          characterDataOldValue 可选
 *          当为 true 时，记录前一个被监听的节点中发生的文本变化。默认值为 false
 * takeRecords() 方法 目前没有使用到
 * disconnect() 方法告诉观察者停止观察变动。可以通过调用其 observe() 方法来重用观察者
 * 
 * 注意事项：
 * childList attributes characterData都为 false 该配置选项会使得实际上不会监视任何内容 而抛出异常，因为 观察者 需要观察至少一个内容才行
 * attributes 选项为 false（表示不监视属性更改）但是attributeOldValue 为 true 或者 attributeFilter 配置也存在 这样也会抛出错误
 * characterDataOldValue 选项为 true 但是 characterData 为 false（表示不跟踪字符更改） 这样也会抛出错误
 * 即：配置中如果出现矛盾，则会导致抛出异常，或出现 未预期的内容
 * 
 * @author MiMao
 * @version 1.0
 */
function overwriteMutationObserver(targetObject, callback = (mutationsList, observer) => { }, attributes = false, childList = false, subtree = false, attributeFilter = [], attributeOldValue = false, characterData = false, characterDataOldValue = false) {
    // 观察器的配置（需要观察什么变动）
    const config = { attributes: attributes, childList: childList, subtree: subtree, attributeFilter: attributeFilter, attributeOldValue: attributeOldValue, characterData: characterData, characterDataOldValue: characterDataOldValue }
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback)
    // 以上述配置开始观察目标节点
    observer.observe(targetObject, config)
    return observer
}
