/**
 * 该 javascript脚本 用于处理 图片懒加载（提升用户体验）
 * 
 * 处理 指定 id选择器容器中 带有 lazyload-img 类名 的图片 进行懒加载并提供各个阶段的动作
 * 当然，lazyload-img 类名 也可自定义，具体情况见下方：
*/


// 定义 图片懒加载的方法
/**
 * @function lazyload_img
 * @description 图片懒加载 只需确定容器id选择器 并对初始化的参数进行配置 即可实现对应区域的图片懒加载了
 * @param 无需传参，方法在底部直接调用（不需要图片懒加载可直接注释）
 * @return {void} 无返回值
 * @example 
 * lazyload_img()
 * @author MiMao
 * @version 1.0
 */
function lazyload_img(){
  // 懒加载 名称前缀
  let lazyload_instance_name_prefix = "lazyload-img-" 
  // id选择器名称集合
  let id_selector_names = ["articles-github-emoji"]
  // 所以实例名称如下：
  // lazyload-img-articles-github-emoji

  // 遍历每一个 id选择器名称集合 来初始化每一个id指定容器的懒加载选项
  for(let id_selector_name of id_selector_names){
    // id 选择器
    let id_selector = "#"+id_selector_name
    // 懒加载 实例名称
    let name = lazyload_instance_name_prefix+id_selector_name
    let container = document.querySelector(id_selector)
    let elements_selector = ".lazyload-img"
    let stage_classname_prefix = "lazyload-img-"
    // 声明 需要 对容器内 图片进行处理，但不方便对该图片进行 添加类名的时候，在 容器元素上添加该类名
    // 用于，自动为所有图片添加 懒加载类
    let include_container_classname = "include-container-lazyload-img"
    // 声明 需要进行排除 不进行处理的图片 类名（图片 带上该类名，则会自动将 lazyload-img类名去掉，如果没有lazyload-img类名则不进行任何处理）
    let exclude_classname = "exclude-lazyload-img"
    // 获取容器中，所有图片元素，为下方 对图片元素的处理做准备
    let container_imgs = document.querySelectorAll(id_selector+" img")

    // 如果 容器 类名列表中，有 声明 需要 对容器内 图片进行处理 的类名，则自动为该容器内所有图片添加懒加载类
    if(container.classList.contains(include_container_classname)){
      // 遍历容器中所有子代元素中 所有图片对象
      for(let container_img of container_imgs){
        let container_img_classList = container_img.classList
        // 根据 需要 对容器内 图片进行处理，如果没有 lazyload_img 类名，则添加类名，如果存在该懒加载类名 则不需要进行处理（所以这里！取反）
        if(!container_img_classList.contains(elements_selector.slice(1)) ){
          container_img.classList.add(elements_selector.slice(1))
        }
      }
    }

    // 遍历容器中所有子代元素中 所有图片对象
    for(let container_img of container_imgs){
      let container_img_classList = container_img.classList
      // 根据 需要进行排除 不进行处理的图片 类名 对不需要懒加载的图像去掉 lazyload_img 类名，如果没有，则不需要处理
      if(container_img_classList.contains(exclude_classname) ){
        if(container_img_classList.contains(elements_selector.slice(1)) ){
          container_img.classList.remove(elements_selector.slice(1))
        }
      }
    }


    // 上方对 懒加载类名 进行了处理，到这里执行 懒加载选项初始化的时候，基本上容器内需要进行懒加载的图片 都带有 懒加载类选择器了

    // 对所有 需要进行懒加载的图片 进行 data-src src 的统一，一般保留 data-src即可（我直接 只保留一个data-src属性）
    // 所以，判断是否存在src属性，如果存在 则将属性值赋值并设置data-src属性，如果不存在则不需要进行处理

    // 遍历容器中所有子代元素中 所有图片对象
    for(let container_img of container_imgs){
      
      // 获取 容器图片中 属性列表
      // 判断是否存在src属性，如果存在 则将属性值赋值并设置data-src属性，如果不存在则不需要进行处理
      if(container_img.getAttribute("src")){
        // 如果存在 src属性，则将src属性值 赋值并设置给 data-src属性，并将src属性移除
        let container_imgsrc_attribute = container_img.getAttribute("src")
        container_img.setAttribute("data-src",container_imgsrc_attribute)
        container_img.removeAttribute("src")
      }
    }

    // 后面只需要 自定义传参实现对应功能即可
    // 配置其他参数（可根据不同的情况 进行if判断配置即可）（配置参数 可参考 template.js 中的参数介绍 ）

    // 调用 初始化懒加载选项的方法
    initLazyloadOption(name,container,elements_selector,100,null,stage_classname_prefix)
  }
}

// 调用该方法，处理 图片加载，不需要则注释该调用方法即可
lazyload_img()











