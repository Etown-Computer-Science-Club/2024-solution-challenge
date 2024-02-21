import React, { useEffect, useState } from "react";
import { Card, Button, Image } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { PostService } from "../services/postService";
import { ImageService } from "../services/imageService";

const Post = ({ data: initData }) => {
	const [data, setData] = useState(initData);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function getPost() {
			const result = await PostService.getPost(id);
			const imageUrl = await ImageService.getImageUrl(result.imagePath);

			setData({ ...result, imageUrl });
		}

		if (id) {
			getPost();
		}
	}, [id]);

	if (!initData && !data) {
		return <div>Loading...</div>;
	}

	function getLocationInfoText() {
		let text = "";

		if (data.city && data.state) {
			text += `${data.city}, ${data.state}`;
			if (data.zipCode) {
				text += ` ${data.zipCode}`;
			}
		} else if (data.zipCode) {
			text += data.zipCode;
		} else {
			text += "Unknown";
		}

		return text;
	}

	function handleBackClick() {
		navigate("/");
	}

	return (
		<div className="h-screen snap-start overflow-hidden">
			<Card className="shadow-lg h-3/4">
				{id && (
					<Button
						type="primary"
						shape="round"
						className="mb-4"
						icon={<RollbackOutlined />}
						onClick={handleBackClick}
					>
						Back
					</Button>
				)}
				<div className="flex justify-between items-center mb-4">
					<div className="text-lg font-semibold">Posted by {data.name}</div>
				</div>
				<div className="mb-4 flex justify-center">
					<Image src={data.imageUrl} alt={data.title} height="192px" width="" />
				</div>
				<div className="flex flex-col items-center gap-1">
					<div className="text-2xl font-bold">{data.cost}</div>
					<span className="text-xl font-semibold">{data.title}</span>
					<span className="text-sm bg-gray-200 py-1 px-2 rounded-full">
						{getLocationInfoText()}
					</span>
				</div>
				<div className="border-t pt-4">
					<p className="mb-4">{data.description}</p>
				</div>
			</Card>
		</div>
	);
};

export default Post;
