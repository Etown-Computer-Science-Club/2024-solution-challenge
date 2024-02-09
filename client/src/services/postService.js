import { DbService } from "./dbService";

export class PostService {
	static db = new DbService("posts");

	static async getPosts() {
		return this.db.getAll();
	}

	static async getPost(id) {
		return this.db.get(id);
	}

	static async addPost(data) {
		return this.db.add(data);
	}

	static async updatePost(id, data) {
		return this.db.update(id, data);
	}

	static async deletePost(id) {
		return this.db.delete(id);
	}
}