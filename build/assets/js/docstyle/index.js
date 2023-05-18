/**
 * 该 javascript脚本 用于处理 doc文章 中样式的逻辑处理（提升用户体验）
 * 
 * 处理 doc文章 中样式 的一些逻辑业务
*/

// 定义方法
/**
 * @function optimizeMarkdownDocStructure
 * @description 优化markdown文档结构（对markdown文档结构进行逻辑处理）
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * optimizeMarkdownDocStructure()
 * 
 * @author MiMao
 * @version 1.0
 */
 function optimizeMarkdownDocStructure(){
    // 获取 文档容器元素集合
    let doc_container_elements = document.querySelectorAll(".app-main-content-doc-content")
    // 遍历每一个 文档容器
    for(let doc_container_element of doc_container_elements){
        // 获取文档容器中第一个元素
        let doc_container_first_element = doc_container_element.childNodes[1]
        // 获取文档容器中第一个元素的标签名称
        let doc_container_first_element_tagname = doc_container_first_element.tagName.toLowerCase()
        // 对文档中，第一个h1，将其设定为 文档标题，为其添加 .doc-content-title类(该类表示 该文档的标题)
        if(doc_container_first_element_tagname == "h1"){
            doc_container_first_element.classList.add("doc-content-title")
            // 并将其 id属性设置为 doc-content-title ，便于其他地方使用
            doc_container_first_element.setAttribute("id","doc-content-title")
        }
    }
    // 获取所有h1-h6标签，并不对含有.doc-content-title的h1进行处理
    let doc_container_all_h1_elements = document.querySelectorAll(".app-main-content-doc-content h1")
    let doc_container_all_h2_elements = document.querySelectorAll(".app-main-content-doc-content h2")
    let doc_container_all_h3_elements = document.querySelectorAll(".app-main-content-doc-content h3")
    let doc_container_all_h4_elements = document.querySelectorAll(".app-main-content-doc-content h4")
    let doc_container_all_h5_elements = document.querySelectorAll(".app-main-content-doc-content h5")
    let doc_container_all_h6_elements = document.querySelectorAll(".app-main-content-doc-content h6")
    // 遍历所有 h1 标签 添加doc-content-h1类名
    for(let doc_container_all_h1_element of doc_container_all_h1_elements){
        let doc_container_all_h1_element_classlist = doc_container_all_h1_element.classList
        if(!doc_container_all_h1_element_classlist.contains("doc-content-h1")){
            // 对不包含 doc-content-title 类名的 才进行添加 相应的h标题样式
            if(!doc_container_all_h1_element_classlist.contains("doc-content-title")){
                doc_container_all_h1_element.classList.add("doc-content-h1")
            }
        }
    }
    // 遍历所有h2标签 添加doc-content-h2类名
    for(let doc_container_all_h2_element of doc_container_all_h2_elements){
        let doc_container_all_h2_element_classlist = doc_container_all_h2_element.classList
        if(!doc_container_all_h2_element_classlist.contains("doc-content-h2")){
            doc_container_all_h2_element.classList.add("doc-content-h2")
        }
    }
    // 遍历所有h3标签 添加doc-content-h3类名
    for(let doc_container_all_h3_element of doc_container_all_h3_elements){
        let doc_container_all_h3_element_classlist = doc_container_all_h3_element.classList
        if(!doc_container_all_h3_element_classlist.contains("doc-content-h3")){
            doc_container_all_h3_element.classList.add("doc-content-h3")
        }
    }
    // 遍历所有h4标签 添加doc-content-h4类名
    for(let doc_container_all_h4_element of doc_container_all_h4_elements){
        let doc_container_all_h4_element_classlist = doc_container_all_h4_element.classList
        if(!doc_container_all_h4_element_classlist.contains("doc-content-h4")){
            doc_container_all_h4_element.classList.add("doc-content-h4")
        }
    }
    // 遍历所有h5标签 添加doc-content-h5类名
    for(let doc_container_all_h5_element of doc_container_all_h5_elements){
        let doc_container_all_h5_element_classlist = doc_container_all_h5_element.classList
        if(!doc_container_all_h5_element_classlist.contains("doc-content-h5")){
            doc_container_all_h5_element.classList.add("doc-content-h5")
        }
    }
    // 遍历所有h6标签 添加doc-content-h6类名
    for(let doc_container_all_h6_element of doc_container_all_h6_elements){
        let doc_container_all_h6_element_classlist = doc_container_all_h6_element.classList
        if(!doc_container_all_h6_element_classlist.contains("doc-content-h6")){
            doc_container_all_h6_element.classList.add("doc-content-h6")
        }
    }
    // 获取 所有 a 标签
    let doc_container_all_a_elements = document.querySelectorAll(".app-main-content-doc-content a")
    // 遍历所有 a 标签 添加doc-content-a（a、a>code）
    for(let doc_container_all_a_element of doc_container_all_a_elements){
        let doc_container_all_a_element_classlist = doc_container_all_a_element.classList
        if(!doc_container_all_a_element_classlist.contains("doc-content-a")){
            doc_container_all_a_element.classList.add("doc-content-a")
        }
        // 对于 a标签中 href值为null或""的标签，将其href属性删除
        if(!doc_container_all_a_element.getAttribute("href")){
            doc_container_all_a_element.removeAttribute("href")
            continue
        }
        // 如果 a标签中的href属性中有：/字符，代表该a标签代表跳转链接，为其添加 doc-content-link
        if(doc_container_all_a_element.getAttribute("href").indexOf("/") != -1){
            doc_container_all_a_element.classList.add("doc-content-link")
        }
        // 获取 所有需要跳转的a标签集合
        let doc_container_all_link_elements = document.querySelectorAll(".app-main-content-doc-content .doc-content-link")
        // 对这些需要跳转的标签进行 跳转处理（根据href值，进行对应的模拟跳转或点击）
        // 定义 存储 jekyll _config.yml文件中，集合的名称 的变量
        let jekyll_collection_name = "articles"
        // 1. 如果 存在 该集合名称，代表此次跳转是文章之间的跳转（并根据 路径关键字个数，来判断是跳转到指定文章类别还是直接跳转到指定类别的文章）
        // （对上面的实现，可以通过对指定元素，进行模拟点击，来实现文章之间的切换，在此之前，需监听所有需要进行处理的元素的点击事件，并对其href属性去除，然后进行模拟点击即可）
        // 监听所有 需要进行处理的跳转链接
        for(let doc_container_all_link_element of doc_container_all_link_elements){
            doc_container_all_link_element.addEventListener('click',()=>{
                // 判断当前是否可以点击 a标签
                if(doc_container_all_link_element.classList.contains("doc-content-a-disabled")){
                    return
                }
                
                // 获取 该元素的href属性 和 title属性
                let doc_container_all_link_element_href = doc_container_all_link_element.getAttribute("href")
                let doc_container_all_link_element_title = doc_container_all_link_element.getAttribute("title")

                // 判断当前 href是否为""或null 如果是，则直接return并移除href属性，并再title中添加“无法到达：”字符串 如果不是，则不需要进行处理
                if(!doc_container_all_link_element_href){
                    doc_container_all_link_element.classList.add("doc-content-a-disabled")
                    doc_container_all_link_element.removeAttribute("href")
                    doc_container_all_link_element.setAttribute("title","无法到达"+doc_container_all_link_element_title?"："+doc_container_all_link_element_title:"任何地方 慌了 还是躺平吧")
                    setTimeout(() => {
                        doc_container_all_link_element.setAttribute("title",doc_container_all_link_element_title?doc_container_all_link_element_title+"想静静":"不，还得奋斗 不然明天住哪儿 吃啥")
                        doc_container_all_link_element.classList.remove("doc-content-a-disabled")
                    }, 2000);
                    return
                }
                // 判断当前 是否是集合中的文章文档链接，如果是则不需要移除href直接处理一两句代码即可return，如果不是 则需要进行下面的代码逻辑，不进行一两句代码处理
                if(jekyll_collection_name != doc_container_all_link_element_href.split("/").slice(1)[0]){
                    // 通过 判断href中是否存在单独的 jekyll_collection_name 对应的值
                    // 获取 href中的路径关键字列表并进行判断 jekyll_collection_name 值是否存在，这里就一句即可
                    return
                }

                // 将其href进行移除
                doc_container_all_link_element.removeAttribute("href")
                // 点击事件，未结束之前，让其保持不可点击的状态 并实现不可点击
                // 即通过点击事件，之前检测是否存在 .doc-content-a-disabled类名，存在则直接return 不存在则说明恢复了点击状态
                // 设置 类名，并通过设置 a标签的title属性，提示用户 当前还不可进行点击
                if(!doc_container_all_link_element.classList.contains("doc-content-a-disabled")){
                    doc_container_all_link_element.classList.add("doc-content-a-disabled")
                }
                // 设置友好提示
                if(doc_container_all_link_element.getAttribute("title") != "还没缓过来，我先缓缓"){
                    doc_container_all_link_element.setAttribute("title","还没缓过来，我先缓缓")
                }

                // 根据 href中的内容进行不同的处理
                // 获取 href中 路径关键字数组，将href字符串用 /进行分隔
                let doc_container_all_link_element_href_keylist = doc_container_all_link_element_href.split("/").slice(1)
                let doc_container_all_link_element_href_keylist_length = doc_container_all_link_element_href_keylist.length
                // 获取 当前激活的文章类别可点击元素
                let current_article_type_clickable_element = document.querySelector("#app-main-side-navbar .active")
                // 获取 当前激活的文章类别可点击元素中的id属性，进而获取 id属性中隐藏的 article.label 值
                let current_article_type_clickable_element_id = current_article_type_clickable_element.getAttribute("id")
                // 获取 当前激活的 article.label 值
                let current_activate_article_label_value = current_article_type_clickable_element_id.split("-")[0]
                // 获取 当前激活的文章文档可点击元素
                let current_activate_article_doc_element = document.querySelector(".article-"+current_activate_article_label_value+"-doc .active")
                // 获取 当前激活的文章文档可点击元素 的 data-doc-label对应的文档label名称，即：doc.label 值（方便比对当前激活的 是否是a链接要跳转的文档）
                let current_activate_article_doc_element_name = current_activate_article_doc_element.getAttribute("data-doc-title").toLowerCase()
                if(doc_container_all_link_element_href_keylist_length == 2 || doc_container_all_link_element_href_keylist_length == 3){
                    // 逻辑分析：
                    // 无论关键字的个数是2或3，都需要先跳转至对应的文章类别 ，如果个数为3，在跳转至对应的文章类别之后，还需跳转至对应的文章
                    // 但，如果本身就在该文章类别中，个数为2时，啥也不需要做
                    // 个数为3时，只需跳转至对应文章，其中本身也在对应文章时，这时需要将href属性设置为 #doc-content-title 将页面推至顶端
                    // 实现步骤：
                    // 将 a标签中的href属性值对应的路径关键字数组的第二个路径与当前文档类别做比较，
                    // (1).如果一致，则代表该a标签的目的为  在路径关键字列表中，长度为2时，该目的为：无任何操作 只需在长度为3时，进行 切换文档判断
                    // （切换文档判断：当需要切换的文档名称与当前文档名称一致时，目的为：将页面推至顶端，不一致时，目的为：切换至指定文档页面）
                    // (2).如果不一致，则代表a标签的目的为  既需要切换到指定的文章类别 有需要切换到指定文档
                    // 开始判断
                    if(doc_container_all_link_element_href_keylist[1] == current_activate_article_label_value){
                        // 如果 a链接路径关键字列表的长度等于3，才开始动作，否则不进行任何动作
                        if(doc_container_all_link_element_href_keylist_length == 3){
                            // 判断 需要切换的文档名称与当前文档名称是否一致
                            if(doc_container_all_link_element_href_keylist[2] == current_activate_article_doc_element_name){
                                // 一致时，将页面推至顶端
                                // 但,如果该功能已经启动,则直接return(通过 enable_doc_content_container_scrollspy类名 有无进行判断)
                                

                                // 将页面推至顶端，即：将href的值设置为：#doc-content-title 并将内容容器添加一些属性和类名即可
                                doc_container_all_a_element.setAttribute("href","#doc-content-title")
                                // 获取 文档内容容器元素
                                let doc_content_container_element = document.querySelector(".doc-"+doc_container_all_link_element_href_keylist[1]+"-style")
                                // 为该容器元素添加一些属性
                                doc_content_container_element.setAttribute("data-bs-spy","scroll")
                                doc_content_container_element.setAttribute("data-bs-target",doc_content_container_element)
                                doc_content_container_element.setAttribute("data-bs-smooth-scroll","true")
                                doc_content_container_element.setAttribute("tabindex","0")
                                // 添加当前元素进行启动该功能的标识类名 默认: enable_doc_content_container_scrollspy
                                doc_content_container_element.classList.add("enable_doc_content_container_scrollspy")
                                // 并设置两秒之后，将这些属性和类名都移除
                                setTimeout(() => {
                                    doc_content_container_element.setAttribute("data-bs-spy","scroll")
                                    doc_content_container_element.setAttribute("data-bs-target",doc_content_container_element)
                                    doc_content_container_element.setAttribute("data-bs-smooth-scroll","true")
                                    doc_content_container_element.setAttribute("tabindex","0")
                                    doc_content_container_element.classList.add("enable_doc_content_container_scrollspy")
                                }, 2000);
                                return
                            }else{
                                // 不一致时，将切换到指定的文档，但如果出现该文档不存在的时候，不做任何判断，即该文档元素不为null
                                // 获取 所有 文档导航元素，以便获取到指定文档名称对应的元素
                                let doc_container_all_carousel_indicators_navbtn_elements = document.querySelectorAll(".article-"+current_activate_article_label_value+"-doc>.carousel-indicators>.doc-carousel-indicators-navbtn")
                                // 遍历所有 doc_container_all_carousel_indicators_navbtn_element 元素,获取到符合条件的那个元素，并进行点击，即可，如果没有一个符合条件，即不做任何动作
                                for(let doc_container_all_carousel_indicators_navbtn_element of doc_container_all_carousel_indicators_navbtn_elements){
                                    // 获得每一个元素data-doc-label属性中存储的 文档 名称（即文档文件的名称）
                                    let doc_container_all_carousel_indicators_navbtn_element_doc_name = doc_container_all_carousel_indicators_navbtn_element.getAttribute("data-doc-title").toLowerCase()
                                    // 通过 doc_container_all_carousel_indicators_navbtn_element_doc_name 和 路径关键字列表中第三项进行对比
                                    if(doc_container_all_carousel_indicators_navbtn_element_doc_name == doc_container_all_link_element_href_keylist[2]){
                                        doc_container_all_carousel_indicators_navbtn_element.click()
                                    }
                                }
                            }
                        }
                    }else{
                        // 如果不一致，则代表a标签的目的为  既需要切换到指定的文章类别 有需要切换到指定文档
                        // 先进行切换文章类别（先获取所有文章类别 再将a标签href属性 路径关键字列表中的第二个元素进行对比，找到该对应的元素，进行点击）
                        let doc_container_all_article_type_navbar_elements = document.querySelectorAll("#app-main-side-navbar>div>div")
                        // 遍历 所有 doc_container_all_article_type_navbar_elements
                        for(let doc_container_all_article_type_navbar_element of doc_container_all_article_type_navbar_elements){
                            // 获得每一个元素id属性中隐藏的 文章类别 名称
                            let doc_container_all_article_type_navbar_element_article_type_name = doc_container_all_article_type_navbar_element.getAttribute("id").split("-")[0]
                            // 判断文章类别和href属性中的路径关键字列表的第二项是否一致，一致 则无需处理，不一致则需要进行跳转，即该元素进行点击
                            if(doc_container_all_article_type_navbar_element_article_type_name == doc_container_all_link_element_href_keylist[1]){
                                doc_container_all_article_type_navbar_element.click()
                            }
                        }
                        // 获取 所有 文档导航元素，以便获取到指定文档名称对应的元素
                        let doc_container_all_carousel_indicators_navbtn_elements = document.querySelectorAll(".article-"+doc_container_all_link_element_href_keylist[1]+"-doc>.carousel-indicators>.doc-carousel-indicators-navbtn")
                        // 遍历所有 doc_container_all_carousel_indicators_navbtn_element 元素,获取到符合条件的那个元素，并进行点击，即可，如果没有一个符合条件，即不做任何动作
                        for(let doc_container_all_carousel_indicators_navbtn_element of doc_container_all_carousel_indicators_navbtn_elements){
                            // 获得每一个元素data-doc-label属性中存储的 文档 名称（即文档文件的名称）
                            let doc_container_all_carousel_indicators_navbtn_element_doc_name = doc_container_all_carousel_indicators_navbtn_element.getAttribute("data-doc-title").toLowerCase()
                            // 通过 doc_container_all_carousel_indicators_navbtn_element_doc_name 和 路径关键字列表中第三项进行对比
                            if(doc_container_all_carousel_indicators_navbtn_element_doc_name == doc_container_all_link_element_href_keylist[2]){
                                doc_container_all_carousel_indicators_navbtn_element.click()
                            }
                        }
                    }
                }else if(doc_container_all_link_element_href_keylist_length == 1){
                    // 如果 a标签的链接 只有 集合的名称时，此时点击该a标签，即代表刷新
                    window.location.reload()
                }
                // 点击事件，完成之后，将href属性和title属性 通过延迟2000毫秒的方式重新设置回来 并将 doc-content-a-disabled 类名移除
                setTimeout(() => {
                    doc_container_all_link_element.setAttribute("href",doc_container_all_link_element_href)
                    doc_container_all_link_element.setAttribute("title",doc_container_all_link_element_title?doc_container_all_link_element_title:doc_container_all_link_element_href.split("/").slice(1).join(" >> "))
                    doc_container_all_link_element.classList.remove("doc-content-a-disabled")
                }, 2000);
            })
        }
    }
    // 获取 所有 table 标签
    let doc_container_all_table_elements = document.querySelectorAll(".app-main-content-doc-content table")
    // 遍历所有 table 标签 添加doc-content-table 和 table、table-striped、table-hover、table-bordered、table-sm
    // （table、table>thead、table>thead>tr、table>tbody、table>tbody>tr ）
    for(let doc_container_all_table_element of doc_container_all_table_elements){
        let doc_container_all_table_element_classlist = doc_container_all_table_element.classList
        if(!doc_container_all_table_element_classlist.contains("doc-content-table")){
            doc_container_all_table_element.classList.add("doc-content-table")
        }
        if(!doc_container_all_table_element_classlist.contains("table")){
            doc_container_all_table_element.classList.add("table")
        }
        if(!doc_container_all_table_element_classlist.contains("table-striped")){
            doc_container_all_table_element.classList.add("table-striped")
        }
        if(!doc_container_all_table_element_classlist.contains("table-hover")){
            doc_container_all_table_element.classList.add("table-hover")
        }
        if(!doc_container_all_table_element_classlist.contains("table-bordered")){
            doc_container_all_table_element.classList.add("table-bordered")
        }
        if(!doc_container_all_table_element_classlist.contains("table-sm")){
            doc_container_all_table_element.classList.add("table-sm")
        }
    }
    // 获取所有 含有 highlighter-rouge 类名的元素(这些元素是需要进行高亮的部分)
    let doc_container_all_highlighter_elements = document.querySelectorAll(".app-main-content-doc-content .highlighter-rouge")
    // 遍历所有含有 .highlighter标签 添加doc-content-highlighter （div.doc-content-highlighter、div.doc-content-highlighter>div.highlight、div.doc-content-highlighter>div.highlight>pre.highlight ）
    for(let doc_container_all_highlighter_element of doc_container_all_highlighter_elements){
        let doc_container_all_highlighter_element_classlist = doc_container_all_highlighter_element.classList
        if(!doc_container_all_highlighter_element_classlist.contains("doc-content-highlighter")){
            doc_container_all_highlighter_element.classList.add("doc-content-highlighter")
        }
        if(!doc_container_all_highlighter_element_classlist.contains("highlight-default")){
            doc_container_all_highlighter_element.classList.add("highlight-default")
        }
    }
}

// 启用 优化markdown文档结构方法，该方法必须启用（该方法与对应文档指定样式有关）
optimizeMarkdownDocStructure()

