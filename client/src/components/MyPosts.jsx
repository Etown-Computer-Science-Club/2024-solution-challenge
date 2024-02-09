import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
	const navigate = useNavigate();

	return (
		<>
			<Posts />
		</>
	);
};

export default MyPosts;
