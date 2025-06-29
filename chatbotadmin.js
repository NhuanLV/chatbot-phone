import Chatbot from "https://nhuanlv.github.io/chatbot-phone/updated_embed.js";
	  Chatbot.init({
		"n8nChatUrl": "https://nhuan2000111.app.n8n.cloud/webhook/b267acca-c8e3-416d-b0ff-521d42aab778/chat",
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
			"welcomeMessage": "Chào bạn! Tôi là SmartVantage, một trợ lý ảo chuyên phân tích dữ liệu khách hàng. Tôi sẽ giúp bạn tổng hợp và phân tích thông tin từ dữ liệu khách hàng để đưa ra những gợi ý chính xác về sản phẩm điện thoại phù hợp với nhu cầu của bạn. Nếu bạn cần tìm hiểu về các mẫu điện thoại phổ biến, thị trường hay xu hướng tiêu dùng, hãy cho tôi biết! 😊",
			"errorMessage": "This is a custom error message",
			"backgroundColor": "#ffffff",
			"height": 600,
			"width": 900,
			"fontSize": 15,
			"starterPrompts": [
			  "Phân tích tôi dữ liệu khách hàng",
			  "Mẫu điện thoại nào được khách hỏi mua nhiều nhất"
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
