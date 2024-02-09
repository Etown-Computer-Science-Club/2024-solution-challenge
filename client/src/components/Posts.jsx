import React, { useState, useEffect } from "react";
import { PostService } from "../services/postService";
import Post from "./Post";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function getPosts() {
			const result = await PostService.getPosts();

			setPosts([...result, ...result, ...result]);
		}

		getPosts();
	}, []);

	return (
		<div className="overflow-y-scroll h-screen snap-y snap-mandatory">
			{posts.map((data, index) => (
				<Post key={index} data={data} />
			))}
		</div>
	);
};

export default Posts;
