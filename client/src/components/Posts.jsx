import React, { useState, useEffect } from "react";
import { PostService } from "../services/postService";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);

	const navigateToCreatePost = () => {
		navigate("/create-post");
	};

	useEffect(() => {
		async function getPosts() {
			const result = await PostService.getPosts();

			setPosts([...result, ...result, ...result]);
		}

		getPosts();
	}, []);

	return (
		<div className="relative">
			<div className="overflow-y-scroll h-screen snap-y snap-mandatory">
				{posts.map((data, index) => (
					<Post key={index} data={data} />
				))}
			</div>
			<Button
				type="primary"
				shape="circle"
				icon={<PlusCircleOutlined />}
				size="large"
				onClick={navigateToCreatePost}
				className="bottom-8 right-8 fixed"
			/>
		</div>
	);
};

export default Posts;
