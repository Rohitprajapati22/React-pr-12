import { addDoc, collection, getFirestore, getDocs, doc, deleteDoc } from "firebase/firestore";
import { app } from "../../firebase";
import { useEffect, useState } from "react";
import "./todo.css"


const Todo = () => {
    const [todos, setTodos] = useState("");
    const [record, setRecord] = useState([]);
    const db = getFirestore(app);

    const getUser = async () => {
        try {
            const data = collection(db, "users");
            const users = await getDocs(data);
            const record = users.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRecord(record);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "users"), {
                todos: todos
            });
            alert("record add");
            setTodos("");

        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        getUser();
    }, [getUser]);

    const deleteUser = async (id) => {
        try {
            let deletedata = doc(db, `users/${id}`);
            await deleteDoc(deletedata);
            alert("record deleted");
            getUser();
        } catch (err) {
            console.log(err);
            return false;
        }
    };



    return (
        <div className="container">
            <div className="row">
                <h2>Todo App</h2>
                <form onSubmit={handlesubmit}>
                    <input className="tital" type="text" placeholder="Add a Todo..." onChange={(e) => setTodos(e.target.value)} value={todos} />
                    <button className="sub" type="submit">Submit</button>
                </form>
                <div className="todo-list">
                    {
                        record.map((val) => {
                            const { id, todos } = val;
                            return (
                                <div key={id}>
                                    <h3>{todos}</h3>
                                    <button className="btn" onClick={() => deleteUser(id)}>Remove</button>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;
