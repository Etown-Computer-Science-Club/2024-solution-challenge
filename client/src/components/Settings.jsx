import React from "react";
import { Layout, Menu, Form, Input, Switch } from "antd";

const { Sider, Content } = Layout;

const Settings = () => {
	return (
		<Layout className="min-h-screen">
			<Sider width={200} className="site-layout-background">
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					style={{ height: "100%", borderRight: 0 }}
				>
					<Menu.Item key="1">Account Information</Menu.Item>
					<Menu.Item key="2">Language and Time</Menu.Item>
					<Menu.Item key="3">Appearance</Menu.Item>
					<Menu.Item key="4">Notification</Menu.Item>
					<Menu.Item key="5">Privacy and Data</Menu.Item>
					<Menu.Item key="6">Dark Theme</Menu.Item>
					<Menu.Item key="7">Location</Menu.Item>
				</Menu>
			</Sider>
			<Layout style={{ padding: "24px" }}>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
					<Form layout="vertical">
						<Form.Item label="Username">
							<Input placeholder="Username" />
						</Form.Item>
						<Form.Item label="First Name">
							<Input placeholder="First Name" />
						</Form.Item>
						<Form.Item label="Last Name">
							<Input placeholder="Last Name" />
						</Form.Item>
						<Form.Item label="Email">
							<Input placeholder="Email" />
						</Form.Item>
						<Form.Item label="Dark Theme" valuePropName="checked">
							<Switch />
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		</Layout>
	);
};

export default Settings;
