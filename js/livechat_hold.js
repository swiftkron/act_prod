
				// Code to run on every page
       window.__lc = window.__lc || {};
       window.__lc.license = 6735541;
       (function() {
              var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
              lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
       })();
       var LC_API = LC_API || {};
       var livechat_chat_started = false;
       LC_API.on_before_load = function()
       {
              // don't hide the chat window only if visitor is currently chatting with an agent
              if (LC_API.visitor_engaged() === false && livechat_chat_started === false)
              {
                     LC_API.hide_chat_window();
              }
       };
       LC_API.on_chat_started = function()
       {
              livechat_chat_started = true;
       };
			}