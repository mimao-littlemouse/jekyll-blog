/**
 * 该 javascript脚本 用于处理 对话框调用 的逻辑处理（提升用户体验）
 * 
 * 处理 不同对话框之间的 样式和内容 业务，为不同对话框定义不同的方法，以供使用（并配合相关样式 一起实现不同对话框的方法调用）
*/

//  事项说明
//  1. 静态模态对话框，点击外部容器，不会取消显示 需添加的属性(默认：点击外部容器 可取消模态对话框的显示) 
//  在 含有 modal类的元素中，添加 data-bs-backdrop="static" data-bs-keyboard="false" 这两个属性 
//  2. 可滚动模态对话框，滚动条在对话框的内容中，对内容进行滚动，需添加的属性(默认对话框的滚动条出现在对话框外的容器，即：整个对话框进行滚动) 
//  在含有modal-dialog类的元素中，添加 modal-dialog-scrollable 类，即可实现
//  3. 模态对话框的垂直居中（默认：水平居中，但垂直方向上，是偏上方） 
//  在含有modal-dialog类的元素中，添加 modal-dialog-centered 类，即可实现 
//  4. 在dialog-body可中书写任意内容，比如使用 row col进行布局（在含有modal-body类的元素中添加container-fluid类和row col等类进行布局） 
//  5. 也可全屏 
//  在 含有modal-dialog 类的元素中添加如下 响应式类名之一或多个也可
// .modal-fullscreen	无论屏幕宽度如何变化总是显示 Always	
// .modal-fullscreen-sm-down	576px	
// .modal-fullscreen-md-down	768px	
// .modal-fullscreen-lg-down	992px	
// .modal-fullscreen-xl-down	1200px	
// .modal-fullscreen-xxl-down	1400px 
//  6. 也可 实现响应式 模态对话框大小响应式变化 ，对应属性
// 在 含有modal-dialog 类的元素中添加如下 响应式类名之一或多个也可
// Small	.modal-sm	300px
// Default	None	500px
// Large	.modal-lg	800px
// Extra large	.modal-xl	1140px 
//  7. 实现多个模态框之间的切换 
//  同一个模态框 只允许打开一个，但可以通过 data-bs-target="#目标id" 中不同的目标id 来切换不同的模态对话框的显示（最终出现的效果是：当前对话框关闭 另一个对话框打开 依次类推） 
//  8. 在模态对话框内部可通过 data-bs-dismiss="modal" 属性来取消当前模态对话框的显示，但在模态对话框外部，需额外添加  
//  9. 事件
// hide.bs.modal 调用hide实例方法后立即激发此事件
// hidden.bs.modal 当modal完成对用户的隐藏（将等待CSS转换完成）时，会触发此事件
// hidePrevented.bs.modal 当显示模态时，其背景是静态的，并且在模态外部单击时，会触发此事件。当按下escape键并且键盘选项设置为false时，也会触发该事件
// show.bs.modal 调用show实例方法时会立即触发此事件。如果是由单击引起的，则单击的元素可用作事件的relatedTarget属性
// shown.bs.modal 当该模式对用户可见时（将等待CSS转换完成），会触发此事件。如果是由单击引起的，则单击的元素可用作事件的relatedTarget属性 

//  调用方法 
//  1. 激活 模态对话框，需要元素 添加 data-bs-toggle="modal" data-bs-target="#目标模态id(这里默认都是 app-dialog)" 
//  例如： 
//  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//     Launch static backdrop modal
// </button> 
//  2. 也可以使用javascript进行激活：例如 
//  backdrop boolean或'static' boolean表示是否显示背景(默认：true 显示背景)，'static'表示显示背景但用户无法点击背景进行退出 
//  focus boolean 默认true 在初始化时将焦点放在模态上 
//  keyboard boolean 默认true 按下转义键时关闭模态 
//  let options = {
//     backdrop: 'static',
//     keyboard: false
// } 
//  const myModalAlternative = new bootstrap.Modal('#myModal', options) 

// 定义方法
/**
 * @function setOrClearModalDialogParamConfig
 * @description 设置或清除模态对话框参数配置（以便 showDialog() hiddenDialog() 方法调用 用于设置参数配置 和 将参数配置进行恢复出厂状态）如果是清除参数配置，直接调用该方法即可，无需传参（按默认参数进行配置对话框）
 * 
 * @param enableTagClassname {string} 标识对话框已启用的类名（用于 告知当前对话框已启用 和 统一对对话框设置样式）默认："" 代表需清除参数配置，如果需要设置参数，该项为必填参数：（固定为：enable-modal-dialog）
 * @param modalType {string} 设置 模态对话框的类型，默认：default； 可选值：default ...等等
 * @param isScrollable {boolean} 设置 模态对话框是否可滚动，默认：可滚动 true； 可选值：true false
 * @param isVerticalCenter {boolean} 设置 模态对话框是否垂直居中，默认：居中 true； 可选值：true false
 * @param isFullscreen {boolean} 模态对话框是否全屏，默认：不全屏 false； 可选值：true false
 * @param fullscreenResponse {string} 模态对话框是否全屏的响应式关键字，默认：always； 可选值：always sm md lg xl xxl 
 * @param modalSizeResponse {string} 设置模态对话框大小响应式关键字，默认：default 平常大小； 可选值：sm default lg xl
 * @param modalDialogBackdrop {boolean} 是否有背景 是否可点击背景退出对话框（默认：static 拥有背景但不可点击背景退出模态对话框 ）可选值：true（有背景，可点击退出） false（无背景） static（有背景，不可点击退出）
 * @param modalDialogKeyboard {boolean} 是否可按ese键退出 模态对话框 默认：false 不可按ese键退出对话框；可选值：true false
 * 
 * @return {void} None
 * 
 * @example 
 * 方法需在 showDialog() hiddenDialog() 方法中进行调用
 * showDialog()中：
 * setOrClearModalDialogParamConfig(参数不能越级填写（即：需要设置第3个参数，但前两个参数不想设置，想保持默认时，这时前两个参数也必须进行设置）)
 * hiddenDialog()中：
 * setOrClearModalDialogParamConfig()
 * @author MiMao
 * @version 1.0
 */
function setOrClearModalDialogParamConfig(enableTagClassname="",modalType="default",isScrollable=true,isVerticalCenter=true,isFullscreen=false,fullscreenResponse="always",modalSizeResponse="default",modalDialogBackdrop="static",modalDialogKeyboard=false) {
    // 定义 标识对话框已启用的类名（用于 告知当前对话框已启用 和 统一对对话框设置样式 也用于辨别当前的行为动作（是进行参数配置，还是恢复默认参数配置（即：所谓的出厂设置）））
    // 必填参数 固定为：enable-modal-dialog 或 ""
    let enable_tag_classname = enableTagClassname
    // 定义是否设置 模态对话框是否可滚动，默认：可滚动 true
    let is_scrollable = isScrollable
    // 定义是否设置 模态对话框是否垂直居中，默认：居中 true
    let is_vertical_center = isVerticalCenter
    // 定义 模态对话框是否全屏，默认：不全屏 false
    let is_fullscreen = isFullscreen
    // 定义 模态对话框是否全屏的响应式关键字，默认：always 可选值：always sm md lg xl xxl 
    let fullscreen_response = fullscreenResponse
    // 定义 是否设置模态对话框大小响应式关键字，默认：default 平常大小 可选值：sm default lg xl
    let modal_size_response = modalSizeResponse
    // 定义 是否有背景 是否可点击背景退出对话框（默认：static 拥有背景但不可点击背景退出模态对话框 ）可选值：true（有背景，可点击退出） false（无背景） static（有背景，不可点击退出）
    let modal_dialog_backdrop = modalDialogBackdrop
    // 定义 是否可按ese键退出 模态对话框
    let modal_dialog_keyboard = modalDialogKeyboard
    
    // 定义 当前对话框的类型类名（用于标识 不同对话框 和 对不同对话框分别设置样式）（这个是该方法默认给到的参数）
    let mark_modal_dialog_classname = "modal_" + modalType + "_dialog"
    // 开始配置
    // 先获取 元素对象
    // 获取 appdialog 对话框中 含有 .modal类名的元素（该元素就是 对话框元素）
    let appdialog_element = document.querySelector("#app-dialog")
    // 获取 appdialog 对话框中 含有 .modal类名的元素（该元素就是 对话框元素）的类名列表
    let appdialog_element_classlist = appdialog_element.classList
    // 获取 appdialog 对话框中 含有 .modal-dialog类名的元素
    let appdialog_modal_dialog_element = document.querySelector("#app-dialog>.modal-dialog")
    // 获取 appdialog 对话框中 含有 .modal-dialog类名的元素 的类名列表
    let appdialog_modal_dialog_element_classlist = appdialog_modal_dialog_element.classList
    // 配置 enable_tag_classname，如果 为空，则在对话框元素上移除该类名，如果不为空，则向其添加类名
    if(enable_tag_classname == ""){
        if(appdialog_element_classlist.contains("enable-modal-dialog")){
            appdialog_element.classList.remove("enable-modal-dialog")
        }
    }else{
        if(!appdialog_element_classlist.contains("enable-modal-dialog")){
            appdialog_element.classList.add("enable-modal-dialog")
        }
    }
    // 配置 对话框data-bs-backdrop data-bs-keyboard 属性
    appdialog_element.setAttribute("data-bs-backdrop",modal_dialog_backdrop)
    appdialog_element.setAttribute("data-bs-keyboard",modal_dialog_backdrop)
    // 配置是否可滚动
    if(is_scrollable){
        if(!appdialog_modal_dialog_element_classlist.contains("modal-dialog-scrollable")){
            appdialog_modal_dialog_element.classList.add("modal-dialog-scrollable")
        }
    }else{
        if(appdialog_modal_dialog_element_classlist.contains("modal-dialog-scrollable")){
            appdialog_modal_dialog_element.classList.remove("modal-dialog-scrollable")
        }
    }
    // 配置是否垂直居中
    if(is_vertical_center){
        if(!appdialog_modal_dialog_element_classlist.contains("modal-dialog-centered")){
            appdialog_modal_dialog_element.classList.add("modal-dialog-centered")
        }
    }else{
        if(appdialog_modal_dialog_element_classlist.contains("modal-dialog-centered")){
            appdialog_modal_dialog_element.classList.remove("modal-dialog-centered")
        }
    }
}

/**
 * @function showDialog
 * @description 为对话框定义一套标准，以供使用其他方法调用
 * @param modal_type {string} 默认："default" （默认是确认对话框）可选值：default 
 * @param title {string} 默认："" 模态对话框标题
 * @param other_params {object} 默认：null 其他参数
 * 
 * @return {object} {instance:object,modal_type:string} 对话框实例和模态对话框类型
 * 
 * @example 
 * 该方法在需要进行调用的地方进行调用
 * 注意：需要在使用完之后，对所有对话框进行 恢复之前的样式，以便其他的对话框使用
 * @author MiMao
 * @version 1.0
 */
function showDialog(modal_type = "default", title = "", other_params) {
    // 获取 appdialog 对话框元素（用于创建实例）
    let appdialog_element = document.querySelector("#app-dialog")
    // 获取 appdialog 对话框中 含有 .modal-dialog类名的元素
    let appdialog_modal_dialog_element = document.querySelector("#app-dialog>.modal-dialog")
    // 定义是否设置 模态对话框是否可滚动，默认：可滚动 true
    let isScrollable = true
    // 定义是否设置 模态对话框是否垂直居中，默认：居中 true
    let isVerticalCenter = true
    // 定义 模态对话框是否全屏，默认：不全屏 false
    let isFullscreen = false
    // 定义 模态对话框是否全屏的响应式关键字，默认：always 可选值：always sm md lg xl xxl 
    let fullscreenResponse = "always"
    // 定义 是否设置模态对话框大小响应式关键字，默认：default 平常大小 可选值：sm default lg xl
    let modalSizeResponse = "default"
    // 定义 标识对话框已启用的类名（用于 告知当前对话框已启用 和 统一对对话框设置样式）
    let enable_tag_classname = "enable_modal_dialog"
    // 定义 当前对话框的类型类名（用于标识 不同对话框 和 对不同对话框分别设置样式）
    let mark_modal_dialog_classname = "modal_" + modal_type + "_dialog"
    // 定义 是否有背景 是否可点击背景退出对话框（默认：static 拥有背景但不可点击背景退出模态对话框 ）可选值：true（有背景，可点击退出） false（无背景） static（有背景，不可点击退出）
    let modal_dialog_backdrop = "static"
    // 定义 是否可按ese键退出 模态对话框
    let modal_dialog_keyboard = false
    // 根据对话框类型，为对话框对应的地方相应的类名（并会对每一种类型额外添加 enable_modal类名以便知晓当前模态对话框已启用 和 modal_类别名称_dialog 这种类名，以便为不同对话框添加样式；例如：default确认对话框，则会添加： enable_modal modal_default_dialog 类名）
    if (modal_type == "default") {
        // 默认对话框（即：确认对话框）
        modal_classnamestr = ""


        // 模态对话框选项，保持默认即可
        //  将 对应default的内容和按钮 进行显示

    } else if (modal_type == "confirm") {

    }

    // 根据上方配置对模态对话框进行相关参数设置

    // 设置完参数 创建模态对话框元素实例并调用实例show()方法显示模态对话框
    let appdialog = new bootstrap.Modal(appdialog_element)
    appdialog.show()
    // 返回 对话框实例 ，以便隐藏对话框
    return appdialog
}

/**
 * @function hiddenDialog
 * @description 为该对话框定义一套标准，以供使用
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * 方法需在调用的地方进行使用
 * 
 * @author MiMao
 * @version 1.0
 */
function hiddenDialog() {
    // 注意：需要在使用完之后，对所有对话框进行 恢复之前的样式，以便其他的对话框使用
}

// handleUpdate

/**
 * @function openConfirm
 * @description 为该对话框定义一套标准，以供使用
 * @param 无需传参
 * @return {void} None
 * 
 * @example 
 * 方法需在调用的地方进行使用
 * 
 * @author MiMao
 * @version 1.0
 */
function openConfirm() {
    // 注意：需要在使用完之后，对所有对话框进行 恢复之前的样式，以便其他的对话框使用
}

