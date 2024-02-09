import React, { useState } from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CreatePost = () => {
	const [form] = Form.useForm();
	const { Option } = Select;

	const onFinish = (values) => {
		console.log("Success:", values);
		// Here you would handle form submission, such as sending the data to a backend server
	};

	const onImageBeforeUpload = (file) => {
		const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
		if (!isJpgOrPng) {
			alert("You can only upload JPG/PNG file!");
			return Upload.LIST_IGNORE;
		}
		// Here you can also implement image size check if needed
		return false; // Do not automatically upload
	};

	return (
		<div className="max-w-md mx-auto p-4">
			<Form
				form={form}
				name="createPost"
				onFinish={onFinish}
				layout="vertical"
				autoComplete="off"
			>
				<Form.Item
					label="Post Title"
					name="title"
					rules={[{ required: true, message: "Please input your post title!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Post Description"
					name="description"
					rules={[{ required: true, message: "Please input your post description!" }]}
				>
					<Input.TextArea rows={4} />
				</Form.Item>

				<Form.Item
					label="Post Cost"
					name="cost"
					rules={[{ required: true, message: "Please select your post cost!" }]}
				>
					<Select placeholder="Select a cost">
						<Option value="free">Free</Option>
						<Option value="$">$</Option>
						<Option value="$$">$$</Option>
						<Option value="$$$">$$$</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Post Image"
					name="image"
					valuePropName="fileList"
					getValueFromEvent={(e) => {
						if (Array.isArray(e)) {
							return e;
						}
						return e && e.fileList;
					}}
				>
					<Upload
						name="logo"
						listType="picture"
						beforeUpload={onImageBeforeUpload}
						maxCount={1}
					>
						<Button icon={<UploadOutlined />}>Click to upload (JPG/PNG only)</Button>
					</Upload>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit Post
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default CreatePost;
