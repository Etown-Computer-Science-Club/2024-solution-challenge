import React, { useState } from "react";
import { Avatar, Input, Button, List, message } from "antd";

const Message = () => {
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([]);
	const lastSentRef = React.useRef(null);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const sendMessage = () => {
		if (inputValue.trim() !== "") {
			let newMessage;
			if (lastSentRef.current === "Them") {
				newMessage = {
					id: messages.length + 2,
					text: inputValue,
					sender: "Thomas Leap", // You can change this to the actual sender's name or id
					timestamp: new Date().toLocaleTimeString(),
				};

				lastSentRef.current = "You";
			} else {
				newMessage = {
					id: messages.length + 1,
					text: inputValue,
					sender: "You", // You can change this to the actual sender's name or id
					timestamp: new Date().toLocaleTimeString(),
				};

				lastSentRef.current = "Them";
			}

			setMessages([...messages, newMessage]);
			setInputValue("");
		} else {
			message.error("Please enter a message.");
		}
	};

	return (
		<div className="message-container">
			<List
				itemLayout="horizontal"
				dataSource={messages}
				renderItem={(item) => (
					<List.Item className={item.sender === "You" ? "message-right" : "message-left"}>
						<List.Item.Meta
							avatar={<Avatar>{item.sender.charAt(0)}</Avatar>}
							title={item.sender} // Display sender's name
							description={<div className="message-content">{item.text}</div>}
						/>
						<div className="message-timestamp">{item.timestamp}</div>
					</List.Item>
				)}
			/>
			<div className="flex align-center mt-10">
				<Input
					placeholder="Type a message..."
					value={inputValue}
					onChange={handleInputChange}
					onPressEnter={sendMessage}
				/>
				<Button type="primary" style={{ "flex-shrink": 0 }} onClick={sendMessage}>
					Send
				</Button>
			</div>
		</div>
	);
};

export default Message;
