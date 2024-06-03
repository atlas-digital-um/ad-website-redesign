import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7_m-rxapfqIP1sIr9A77gCyFkDvySkmY",
  authDomain: "internal-project-22ae3.firebaseapp.com",
  projectId: "internal-project-22ae3",
  storageBucket: "internal-project-22ae3.appspot.com",
  messagingSenderId: "290677434670",
  appId: "1:290677434670:web:9d2c97212719a8439d32bf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of members from your database
export async function getTeam() {
  const members = collection(db, "members");
  try {
    const memberSnapshot = await getDocs(members);
    const memberList = memberSnapshot.docs.map((member) => member.data());
    return memberList;
  } catch (e) {
    console.log(e);
  }
}
