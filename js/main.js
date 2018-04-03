(function() {

	/**
	 * 初始化
	 */
	function init() {
		$(".header").load("component/header.html");//加载header
		$(".footer").load("component/footer.html");//加载footer
		$("#main").load("view/index.html");

		documentEvent();
	}
	var hasAlert = false;
	/**
	 * @return {[type]}
	 */
	function alert(message) {
		if (!hasAlert) {//alert
			$("#alert_content").html(message|| "");
			hasAlert = true;
			$("#cover>.alert").show();
			$("#cover").show();
		}
	}
	/**
	 * @param  {关闭alert}
	 * @return {[type]}
	 */
	function closeAlert() {
		hasAlert = false;
		$("#cover").hide();
	}
	/**
	 * 页面事件
	 */
	function documentEvent() {
		/**
		 * @param  {关闭alert}
		 * @return {[type]}
		 */
		$("body").on("click", ".cover .alert .foot button", function() {
			closeAlert();
		});
		/**
		 * @param  {关闭alert}
		 * @return {[type]}
		 */
		$("body").on("click", ".cover .alert .title i", function() {
			closeAlert();
		});
	}
	window.init = init;
	window.alert = alert;
})(window);