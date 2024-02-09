import React from "react";
import { Card, Rate } from "antd";
import { GeoPoint } from "firebase/firestore";

const Post = ({ data }) => {
	// Assuming data contains the individual post data

	return (
		<div className="h-screen snap-start overflow-hidden">
			<Card className="shadow-lg h-4/5">
				<div className="flex justify-between items-center mb-4">
					<div className="text-lg font-semibold">{data.username}</div>
				</div>
				<div className="mb-4">
					{/* Placeholder for Images/Videos */}
					<div className="bg-gray-200 h-48"></div>
				</div>
				<div className="flex justify-between items-center mb-4">
					<div className="text-2xl font-bold">$$$</div>
					<div className="flex items-center">
						<span className="text-xl font-semibold mr-2">{data.itemName}</span>
						<span className="text-sm bg-gray-200 py-1 px-2 rounded-full">
							{data.zip}
						</span>
					</div>
					<div>
						<span className="p-2 bg-gray-200 rounded-full mr-2">♥</span>
						<span className="p-2 bg-gray-200 rounded-full">⇪</span>
					</div>
				</div>
				<div className="border-t pt-4">
					<p className="mb-4">{data.description}</p>
				</div>
			</Card>
		</div>
	);
};

export default Post;
