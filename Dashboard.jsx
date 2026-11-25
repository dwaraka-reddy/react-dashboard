import React, { useState } from "react";

export default function Dashboard() {
    const [tasks, setTasks] = useState(0);

    return (
        <main>
            <h1>Engineering Dashboard</h1>
            <p>Completed tasks: {tasks}</p>
            <button onClick={() => setTasks(tasks + 1)}>
                Complete Task
            </button>
        </main>
    );
}