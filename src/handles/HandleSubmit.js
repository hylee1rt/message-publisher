import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {db} from '../database/firebase';
import NewFile from "../editor/NewFile";

const handleSubmit = (testdata) => {
    const ref = collection(getFirestore, "messages") // Firebase creates this automatically

    let data = {
        testData: testdata
    }
    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

// const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await addDoc(collection(db, 'tasks'), {
//         title: title,
//         description: description,
//         completed: false,
//         created: Timestamp.now()
//       })
//       onClose()
//     } catch (err) {
//       alert(err)
//     }
//   }

export default handleSubmit