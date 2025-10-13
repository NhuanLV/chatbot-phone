import Chatbot from "https://nhuanlv.github.io/chatbot-phone/updated_embed.js";
	  Chatbot.init({
		"n8nChatUrl": "https://nhuan20001111.app.n8n.cloud/webhook/077901b9-cbe3-429a-8759-2f301b59dca8/chat",
		"theme": {
		  "button": {
			"backgroundColor": "#111173",
			"right": 5,
			"bottom": 15,
			"size": 65,
			"iconColor": "#FFFFFF",
			"customIconSrc": "img/agent2.png",
			"autoWindowOpen": {
			  "autoOpen": true,
			  "openDelay": 1
			}
		  },
		  "tooltip": {
			"showTooltip": true,
			"tooltipMessage": "🤖 Xin chào👋",
			"tooltipBackgroundColor": "#F0F0F9",
			"tooltipTextColor": "#1c1c1c",
			"tooltipFontSize": 14
		  },
		  "chatWindow": {
			"showTitle": true,
			"title": "EDVANGARDE AGENT",
			"titleAvatarSrc": "img/agent2.png",
			"welcomeMessage": "Chào bạn! Mình là EDVANGARDE, vui lòng nhập MSSV của bạn để xem kết quả học tập, hãy cho mình biết nhé!☺️",
			"errorMessage": "This is a custom error message",
			"backgroundColor": "#ffffff",
			"height": 600,
			"width": 900,
			"fontSize": 15,
			"starterPrompts": [
			],
			"starterPromptFontSize": 14,
			"clearChatOnReload": false,
			"botMessage": {
			  "backgroundColor": "#F0F0F9",
			  "textColor": "#050505",
			  "showAvatar": true,
			  "avatarSrc": "img/agent1.png"
			},
			"userMessage": {
			  "backgroundColor": "#F0F0F9",
			  "textColor": "#050505",
			  "showAvatar": true,
			  "avatarSrc": "img/user.png"
			},
			"textInput": {
			  "placeholder": "Type your query",
			  "backgroundColor": "#ffffff",
			  "textColor": "#1e1e1f",
			  "sendButtonColor": "#111173",
			  "maxChars": 100,
			  "maxCharsWarningMessage": "Bạn đã vượt quá giới hạn ký tự. Vui lòng nhập ít hơn 100 ký tự.",
			  "autoFocus": false
			}
		  }
		}
	  });





