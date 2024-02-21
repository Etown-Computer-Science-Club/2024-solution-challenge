import { db } from "../firebase";
import { doc, collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export class DbService {
	constructor(collectionName) {
		this.collectionRef = collection(db, collectionName);
	}


	async get(id) {
		const docRef = doc(this.collectionRef, id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return {
				id,
				...docSnap.data()
			}
		} else {
			return null;
		}
	}

	async getAll() {
		const queryResult = await getDocs(this.collectionRef);
		const result = queryResult.docs.map(doc => (
			{
				id: doc.id,
				...doc.data()
			}
		))

		return result;
	}

	async add(data) {
		const docRef = await addDoc(this.collectionRef, data);

		return {
			id: docRef.id,
			...data
		};
	}

	async update(id, data) {
		const docRef = doc(this.collectionRef, id);

		await updateDoc(docRef, data);
	}

	async delete(id) {
		const docRef = doc(this.collectionRef, id);

		await deleteDoc(docRef);
	}
}