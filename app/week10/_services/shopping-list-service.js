import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItem = async (collectionName) => {
    const item = [];
    const q = query(collection(db, `users/${userId}/items`));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        item.push({ id: doc.id, 
                    data: doc.data() });
    });
    return item;
}

const addItem = async (collectionName, item) => {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef;
}

export { getItem, addItem };