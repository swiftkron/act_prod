window.__lc = window.__lc || {};
window.__lc.license = 6735541;
(function () {
	var lc = document.createElement('script');
	lc.type = 'text/javascript';
	lc.async = true;
	lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(lc, s);
})();

$(function () {
	if (!$('body').hasClass("ShowChat")) 
	{
		console.log('Chat should be hidden unless already initiated');
		window.LC_API = window.LC_API || {};
		var livechat_chat_started = false;

		window.LC_API.on_before_load = function ()
		{
			if (window.LC_API.visitor_engaged() === false && livechat_chat_started === false)
			{
				window.LC_API.hide_chat_window();
			}
			else
			{
			}
		};

		window.LC_API.on_chat_started = function ()
		{
			livechat_chat_started = true;
		};
	}
	else
	{
	}
});
