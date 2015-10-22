/*
 * @弹出提示层 ( 加载动画(load), 提示动画(tip), 成功(success), 错误(error), )
 * @method  tipBox
 * @description 默认配置参数 
 * @time    2014-12-19 
 * @param {Number} width -宽度
 * @param {Number} height -高度       
 * @param {String} str -默认文字
 * @param {Object} windowDom -载入窗口 默认当前窗口
 * @param {Number} setTime -定时消失(毫秒) 默认为0 不消失
 * @param {Boolean} hasMask -是否显示遮罩
 * @param {Boolean} hasMaskWhite -显示白色遮罩 
 * @param {Boolean} clickDomCancel -点击空白取消
 * @param {Function} callback -回调函数 (只在开启定时消失时才生效)
 * @param {String} type -动画类型 (加载,成功,失败,提示)
 * @example 
 * new TipBox(); 
 * new TipBox({type:'load',setTime:1000,callback:function(){ alert(..) }}); 
*/
function TipBox(cfg){
    this.config = { 
        // width          : 180,
        // height         : 150,
        str            : '正在处理', 
        windowDom      : window, 
        setTime        : 0, 
        hasMask        : true, 
        hasMaskWhite   : false, 
        clickDomCancel : false, 
        callback       : null, 
        type           : 'success', 
        confirm_sure   : {'txt': '确认', 'callback': null}, 
        confirm_cancel : {'txt': '取消', 'callback': null}, 
    }
    $.extend(this.config, cfg);  
    
    // 存在就retrun
    if(TipBox.prototype.boundingBox) return;
    
    // 初始化
    this.render(this.config.type);  
    return this; 
};

// 执行自动关闭 tipbox 的定时器，在窗口关闭后清除
TipBox.prototype.closeTimmer = null;

// 外层box
TipBox.prototype.boundingBox = null;

// 渲染
TipBox.prototype.render = function(tipType,container){  
    this.renderUI(tipType); 
    
    // 绑定事件
    this.bindUI(); 
    
    // 初始化UI
    this.syncUI(); 
    $(container || this.config.windowDom.document.body).append(TipBox.prototype.boundingBox);   
};

// 渲染UI
TipBox.prototype.renderUI = function(tipType){ 
    TipBox.prototype.boundingBox = $("<div class='tipbox-animation'></div>");       
    tipType == 'load'    && this.loadRenderUI();
    tipType == 'success' && this.successRenderUI(); 
    tipType == 'error'   && this.errorRenderUI();
    tipType == 'tip'     && this.tipRenderUI();
    tipType == 'confirm' && this.confirmRenderUI();
    
    TipBox.prototype.boundingBox.appendTo(this.config.windowDom.document.body);
    if (this.config.clickDomCancel) {
        this._close = $("<div class='tipbox-close'></div>");
        this._close.appendTo(TipBox.prototype.boundingBox);
    }

    //是否显示遮罩
    if(this.config.hasMask){
        this.config.hasMaskWhite ? this._mask = $("<div class='mask_white'></div>") : this._mask = $("<div class='tipbox-mask'></div>");
        this._mask.appendTo(this.config.windowDom.document.body);
    }   
    
    //定时消失
    _this = this;
    !this.config.setTime && typeof this.config.callback === "function" && (this.config.setTime = 1);    
    this.config.setTime && (TipBox.prototype.closeTimmer = setTimeout( function(){ _this.close(); }, _this.config.setTime ));

    // 绑定确认和取消事件
    if (tipType == 'confirm') {
        (function(tipbox) {
            var $sure = TipBox.prototype.boundingBox.find('.tipbox-ctrls_sure');
            var $cancel = TipBox.prototype.boundingBox.find('.tipbox-ctrls_cancel');
            if(tipbox.config.confirm_sure['callback'] && $sure) { 
                $sure.click( function() { tipbox.config.confirm_sure['callback'](tipbox); });
            }
            if(tipbox.config.confirm_cancel['callback'] && $cancel) { 
                $cancel.click( function() { tipbox.config.confirm_cancel['callback'](tipbox); });
            }
        })(this);
    };
};

TipBox.prototype.bindUI = function() {
    _this = this;
    
    // 点击空白立即取消
    this.config.clickDomCancel && this._mask && this._mask.click(function(){_this.close();});
    this.config.clickDomCancel && this._close && this._close.click(function(){_this.close();});
};

TipBox.prototype.syncUI = function() {
    var tipboxWidth = TipBox.prototype.boundingBox.width();
    var tipboxHeight = TipBox.prototype.boundingBox.height();
    this.config.width = tipboxWidth;
    this.config.height = tipboxHeight;
    
    TipBox.prototype.boundingBox.css({
        width       : this.config.width+'px',
        height      : this.config.height+'px',
        marginLeft  : "-"+(this.config.width/2)+'px',
        marginTop   : "-"+(this.config.height/2)+'px'
    }); 
};

// 提示效果UI
TipBox.prototype.tipRenderUI = function() {
    var tip = "<div class='tipbox-tip'>";
        tip +="     <div class='tipbox-icon'>i</div>";
        tip +="     <div class='tipbox-desc'>"+this.config.str+"</div>";
        tip += "</div>";
    TipBox.prototype.boundingBox.append(tip);
};

// 成功效果UI
TipBox.prototype.successRenderUI = function() {
    var suc = "<div class='tipbox-success'>";
        suc +=" <div class='tipbox-icon'>";
        suc +=      "<div class='tipbox-line_short'></div>";
        suc +=      "<div class='tipbox-line_long'></div>  ";      
        suc +=  "</div>";
        suc +=" <div class='tipbox-desc'>"+this.config.str+"</div>";
        suc += "</div>";
    TipBox.prototype.boundingBox.append(suc);
};

// 错误效果UI
TipBox.prototype.errorRenderUI = function() {
    var err  = "<div class='tipbox-lose'>";
        err +=  "   <div class='tipbox-icon'>";
        err +=  "       <div class='tipbox-icon_box'>";
        err +=  "           <div class='tipbox-line_left'></div>";
        err +=  "           <div class='tipbox-line_right'></div>";
        err +=  "       </div>";
        err +=  "   </div>";
        err +=  "<div class='tipbox-desc'>"+this.config.str+"</div>";
        err +=  "</div>";
    TipBox.prototype.boundingBox.append(err);
};

// 需要确认的效果 UI
TipBox.prototype.confirmRenderUI = function() {
    var confirm  = "<div class='tipbox-confirm'>";
        confirm +=  "    <div class='tipbox-icon'>!</div>";
        confirm +=  "    <div class='tipbox-desc'>"+this.config.str+"</div>";
        confirm +=  "    <div class='tipbox-ctrls tipbox-clear'>";
        confirm +=  "        <div class='tipbox-ctrls_cancel'>"+this.config.confirm_cancel.txt+"</div>";
        confirm +=  "        <div class='tipbox-ctrls_sure'>"+this.config.confirm_sure.txt+"</div>";
        confirm +=  "    </div>";
        confirm +=  "</div>";
    TipBox.prototype.boundingBox.append(confirm);
};

// 加载动画load UI
TipBox.prototype.loadRenderUI = function() {
    var load = "<div class='tipbox-load'>";
        load += "<div class='tipbox-icon_box'>";
    for(var i = 1; i < 4; i++ ){
        load += "<div class='tipbox-cirBox"+i+"'>";
        load +=     "<div class='tipbox-cir1'></div>";
        load +=     "<div class='tipbox-cir2'></div>";
        load +=     "<div class='tipbox-cir3'></div>";
        load +=     "<div class='tipbox-cir4'></div>";
        load += "</div>";
    }
    load += "</div>";
    load += "</div>";
    load += "<div class='tipbox-desc'>"+this.config.str+"</div>";
    TipBox.prototype.boundingBox.append(load);
};

// 关闭
TipBox.prototype.close = function() {
    TipBox.prototype.destroy();
    this.destroy();
    this.config.setTime && typeof this.config.callback === "function" && this.config.callback();
    TipBox.prototype.closeTimmer && clearTimeout(TipBox.prototype.closeTimmer);
};

// 销毁
TipBox.prototype.destroy = function() {
    this._mask && this._mask.remove();
    TipBox.prototype.boundingBox && TipBox.prototype.boundingBox.remove(); 
    TipBox.prototype.boundingBox = null;
    TipBox.prototype.closeTimmer && clearTimeout(TipBox.prototype.closeTimmer);
};