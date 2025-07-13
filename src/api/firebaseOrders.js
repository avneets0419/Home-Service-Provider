import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

// Fetch all orders
export const fetchOrders = async () => {
  const snapshot = await getDocs(collection(db, "orders"));
  const orders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return orders;
};

// Add a new order
export const addOrder = async (orderData) => {
  await addDoc(collection(db, "orders"), orderData);
};
