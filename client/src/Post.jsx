import React from "react";
import { Card, Rate } from "antd";

const Post = () => {
	return (
		<div className="max-w-screen-md mx-auto p-4">
			<Card className="shadow-lg">
				<div className="flex justify-between items-center mb-4">
					<div className="text-lg font-semibold">Username</div>
					<Rate allowHalf defaultValue={2.5} />
				</div>
				<div className="mb-4">
					{/* Placeholder for Images/Videos */}
					<div className="bg-gray-200 h-48"></div>
				</div>
				<div className="flex justify-between items-center mb-4">
					<div className="text-2xl font-bold">$$$</div>
					<div className="flex items-center">
						<span className="text-xl font-semibold mr-2">Item Name</span>
						<span className="text-sm bg-gray-200 py-1 px-2 rounded-full">Location</span>
					</div>
					<div>
						{/* Placeholder for heart and share icons */}
						<span className="p-2 bg-gray-200 rounded-full mr-2">♥</span>
						<span className="p-2 bg-gray-200 rounded-full">⇪</span>
					</div>
				</div>
				<div className="border-t pt-4">
					<p className="mb-4">Description</p>
					<div className="flex justify-between">
						<button className="border rounded-full py-1 px-6 focus:outline-none hover:bg-gray-100">
							Contact
						</button>
						<button className="border rounded-full py-1 px-6 focus:outline-none hover:bg-gray-100">
							Q/A
						</button>
						<button className="border rounded-full py-1 px-6 focus:outline-none hover:bg-gray-100">
							Related
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Post;
