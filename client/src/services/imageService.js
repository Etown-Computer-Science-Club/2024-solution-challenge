import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export class ImageService {
	static async uploadImage(name, file) {
		const fileRef = ref(storage, name);
		return await uploadBytes(fileRef, file);
	}
}