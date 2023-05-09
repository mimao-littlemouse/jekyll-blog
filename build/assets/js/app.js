// 监听 页面加载的各个阶段的事件 
// 监听 
// document.readyState 文档的加载状态（共有三个状态 loading interactive complete）
// loading： 正在加载 document
// interactive：互动文档已经完成加载，文档已被解析（但：css 还未完全加载完成（之后 DOMContentLoaded事件会触发，这时才表示已经加载完成这些子资源））
// complete：完成文档和所有子资源已完成加载，并且 onload事件将会触发
document.onreadystatechange = () => {
    if (document.readyState == "interactive") {
        // 此时切换app加载页面中的提示内容
        setAppLoadingText("Document加载完成")
    }
    if (document.readyState == "complete") {
        // 此时切换app加载页面中的提示内容
        setAppLoadingText("其他子资源 加载完成")
    }
}
// DOM树渲染完成时触发，此时可能外部资源还在加载（同: jquery中ready事件一致）
window.addEventListener('DOMContentLoaded', () => {
    // interactive
    // 此时切换app加载页面中的提示内容
    setAppLoadingText("Document渲染完成")
    // complete
    // onload
})
// 页面加载完成（完成了所有资源的加载）
window.onload = () => {
    // 此时切换app加载页面中的提示内容
    setAppLoadingText("全部加载完成")
    // 页面加载完成，取消app加载
    setTimeout(()=>{
        closeAppLoading()
    },200)
}