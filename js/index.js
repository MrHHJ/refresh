(function(){
	var Index = function() {
	};
	/**
	 * 初始化显示页面
	 */
	Index.prototype.init = function() {
		$(".header").load("component/header.html");//加载header
		$(".footer").load("component/footer.html");//加载footer
		$("#main").load("view/index.html")
	};
	/**
	 * 初始化显示页面的元素大小 
	 */
	Index.prototype.mainFrame = function() {

	};
	window.indexPage = new Index();
})(window);