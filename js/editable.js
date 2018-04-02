/**
 * @author 似语若离
 * @description 允许页面进行文本编辑
 * @required jquery、font-awesome、edit.css
 */
(function() {
	function EditPage(argument) {
		
	}
	/**
	 * @description 初始化页面
	 */
	EditPage.prototype.init = function(div) {
		this.documentEvent();//添加页面事件
	};
	/**
	 * @description 页面的所有事件
	 */
	EditPage.prototype.documentEvent = function() {
		/**
		 * @description 点击编辑区域，最后一个P被选中
		 */
		$("body").on("click", "#contentArea", function() {
			$(this).find("div").last().focus();
		});
		/**
		 * @param  event 
		 * @description 编辑区域内禁止事件冒泡 
		 */
		$("body").on("click", "#contentArea *", function(event) {
			event.stopPropagation();
		});
	};
	window.editpage = new EditPage();
})(window);