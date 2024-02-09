import React, { useState } from "react";
import { Tabs, Card, Avatar } from "antd";
import { SettingOutlined, UserOutlined, MessageOutlined, BellOutlined } from "@ant-design/icons";
import Settings from "./Settings"; // Importing the Settings component
import Post from "./Post"; // Importing the Settings component
import Posts from "./Posts";
import Message from "./Message"; // Importing the Settings component


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
					{/* Content of New Posts */}
				</TabPane>
				<TabPane tab={<TabIcon icon={<BellOutlined />} text="For You" />} key="2">
					<Message/>{/* Content for You */}
				</TabPane>
				<TabPane tab={<TabIcon icon={<BellOutlined />} text="News" />} key="3">
					{/* Content of News */}
				</TabPane>
				<TabPane tab={<TabIcon icon={<UserOutlined />} text="Your Account" />} key="4">
					{/* Content of Your Account */}
				</TabPane>
				<TabPane tab={<TabIcon icon={<SettingOutlined />} text="Settings" />} key="5">
					<Settings /> {/* Render Settings component when "Settings" tab is active */}
				</TabPane>
			</Tabs>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card className="col-span-1">
					<SettingOutlined className="text-xl" />
					<p>Settings</p>
				</Card>
				<Card className="col-span-1">
					<Avatar size="large" icon={<UserOutlined />} />
					<p>Username</p>
					<p>Your Account</p>
				</Card>
				<Card className="col-span-1">
					<MessageOutlined className="text-xl" />
					<p>Your Posts</p>
				</Card>
			</div>

			<div className="text-center mt-8">
				<p className="text-lg font-semibold">Website News</p>
				<div className="flex justify-center space-x-2">
					{/* Example of dot indicators */}
					<span className="h-2 w-2 bg-gray-400 rounded-full"></span>
					<span className="h-2 w-2 bg-gray-400 rounded-full"></span>
					<span className="h-2 w-2 bg-gray-400 rounded-full"></span>
				</div>
			</div>
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
