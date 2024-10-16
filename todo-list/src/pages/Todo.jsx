// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "../../firebase";
// import { useEffect, useState } from "react";


// const Todo = () => {
//     const [todos, setTodos] = useState("");


//     const getData = () => {
//         let data = JSON.parse(localStorage.getItem('todo')) || [];
//         return data;
//     };

//     const [record, setRecord] = useState(getData())

//     useEffect(() => {
//         localStorage.setItem('todo', JSON.stringify(record));
//     }, [record]);

//     const deleteTodo = (id) => {
//         let updatedRecord = record.filter((val) => val.id !== id);
//         setRecord(updatedRecord);
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const db = getDatabase(app)
//         let id = Math.floor(Math.random() * 100000);
//         set(ref(db, `users/${id}`), {
//             todo: todos
//         })
//         alert("record add");
//         setTodos("");

//     }


//     return (
//         <div className="container">
//             <div className="row">
//                 <h2>Todo App</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" placeholder="Add a Todo..." onChange={(e) => setTodos(e.target.value)} value={todos} />
//                     <button type="submit">Submit</button>
//                 </form>

//                 <div className="todo-list">

//                     {
//                         record.map((val) => {
//                             return (
//                                 <div key={val}>
//                                     <h3>{val.todos}</h3>
//                                     <button onClick={() => deleteTodo(val.id)}>Remove</button>
//                                 </div>
//                             )

//                         }
//                         )}

//                     {/* // <div className="todo-contnt">
//                     //             <h5>Comb my hair</h5>
//                     //             <button>Remove</button>
//                     //         </div> */}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Todo



import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase";
import { useEffect, useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState("");

    // Retrieve data from localStorage
    const getData = () => {
        let data = JSON.parse(localStorage.getItem("todo")) || [];
        return data;
    };

    const [record, setRecord] = useState(getData());

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(record));
    }, [record]);

    const deleteTodo = (id) => {
        let updatedRecord = record.filter((val) => val.id !== id);
        setRecord(updatedRecord);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todos) return;

        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);


        set(ref(db, `users/${id}`), {
            todo: todos,
        });

        setRecord((prev) => [...prev, { id, todo: todos }]);

        alert("Todo added!");
        setTodos(""); 
    };

    return (
        <div className="container">
            <div className="row">
                <h2>Todo App</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add a Todo..." onChange={(e) => setTodos(e.target.value)} value={todos}/>
                    <button type="submit">Submit</button>
                </form>

                <div className="todo-list">
                    {


                        record.map((val) => (
                            <div key={val.id}>
                                <h3>{val.todo}</h3>
                                <button onClick={() => deleteTodo(val.id)}>Remove</button>
                            </div>
                        ))


                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;
