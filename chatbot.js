import Chatbot from "https://nhuanlv.github.io/chatbot-phone/updated_embed.js";
	  Chatbot.init({
		"n8nChatUrl": "https://nhuan2000111111.app.n8n.cloud/webhook/63a3426c-f148-4663-9d13-2b1ff5c3b6d5/chat",
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
			"title": "PROMELA",
			"titleAvatarSrc": "img/agent2.png",
			"welcomeMessage": "Chào bạn! Mình là PROMELA, vui lòng nhập câu hỏi của bạn, hãy cho mình biết nhé!☺️",
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
			  "maxChars": 1000,
			  "maxCharsWarningMessage": "Bạn đã vượt quá giới hạn ký tự. Vui lòng nhập ít hơn 1000 ký tự.",
			  "autoFocus": false
			}
		  }
		}
	  });








