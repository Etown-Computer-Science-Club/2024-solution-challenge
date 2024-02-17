import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export class ImageService {
	static async uploadImage(name, file) {
		const fileRef = ref(storage, name);
		return await uploadBytes(fileRef, file);
	}

	static async getImageUrl(path) {
		const fileRef = ref(storage, path);
		return await getDownloadURL(fileRef);
	}
}