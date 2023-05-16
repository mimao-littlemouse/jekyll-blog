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

