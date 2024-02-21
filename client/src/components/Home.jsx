import React, { useState } from "react";
import { Tabs } from "antd";
import { SettingOutlined, MessageOutlined } from "@ant-design/icons";
import Settings from "./Settings";
import Posts from "./Posts";
import Message from "./Message";

const { TabPane } = Tabs;

const Home = () => {
	const [activeTab, setActiveTab] = useState("1"); // State to manage active tab

	const handleTabChange = (key) => {
		setActiveTab(key);
	};

	return (
		<div className="max-w-screen-lg mx-auto p-4">
			<Tabs
				defaultActiveKey="1"
				activeKey={activeTab}
				onChange={handleTabChange}
				className="mb-4"
			>
				<TabPane tab={<TabIcon icon={<MessageOutlined />} text="New Posts" />} key="1">
					<Posts />
				</TabPane>
				<TabPane tab={<TabIcon icon={<MessageOutlined />} text="Messages" />} key="2">
					<Message />
				</TabPane>
				<TabPane tab={<TabIcon icon={<SettingOutlined />} text="Settings" />} key="3">
					<Settings /> {/* Render Settings component when "Settings" tab is active */}
				</TabPane>
			</Tabs>
		</div>
	);
};

const TabIcon = ({ icon, text }) => {
	return (
		<span className="flex gap-2">
			{icon}
			{text}
		</span>
	);
};

export default Home;
