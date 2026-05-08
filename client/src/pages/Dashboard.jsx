import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

    const [projects,setProjects] = useState([]);
    const [tasks,setTasks] = useState([]);

    const [projectData,setProjectData] = useState({
        title:"",
        description:""
    });

    const [taskData,setTaskData] = useState({
        title:"",
        description:"",
        project:"",
        priority:"Medium"
    });

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    const fetchProjects = async () => {

        const {data} = await API.get("/projects");

        setProjects(data);
    };

    const fetchTasks = async () => {

        const {data} = await API.get("/tasks");

        setTasks(data);
    };

    useEffect(()=>{

        fetchProjects();
        fetchTasks();

    },[]);

    const createProject = async (e) => {

        e.preventDefault();

        await API.post("/projects",projectData);

        setProjectData({
            title:"",
            description:""
        });

        fetchProjects();
    };

    const createTask = async (e) => {

        e.preventDefault();

        await API.post("/tasks",taskData);

        setTaskData({
            title:"",
            description:"",
            project:"",
            priority:"Medium"
        });

        fetchTasks();
    };

    const updateStatus = async (id,status) => {

        await API.put(`/tasks/${id}`,{
            status
        });

        fetchTasks();
    };

    return (

        <div className="p-10">

            <div className="flex justify-between mb-8">

                <h1 className="text-3xl font-bold">
                    Team Task Manager
                </h1>

                <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>

            </div>

            <div className="grid grid-cols-2 gap-10">

                <form
                onSubmit={createProject}
                className="border p-5 rounded"
                >

                    <h2 className="text-xl font-bold mb-4">
                        Create Project
                    </h2>

                    <input
                    type="text"
                    placeholder="Project Title"
                    className="w-full border p-2 mb-3"
                    value={projectData.title}
                    onChange={(e)=>
                        setProjectData({
                            ...projectData,
                            title:e.target.value
                        })
                    }
                    />

                    <textarea
                    placeholder="Description"
                    className="w-full border p-2 mb-3"
                    value={projectData.description}
                    onChange={(e)=>
                        setProjectData({
                            ...projectData,
                            description:e.target.value
                        })
                    }
                    />

                    <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Create Project
                    </button>

                </form>

                <form
                onSubmit={createTask}
                className="border p-5 rounded"
                >

                    <h2 className="text-xl font-bold mb-4">
                        Create Task
                    </h2>

                    <input
                    type="text"
                    placeholder="Task Title"
                    className="w-full border p-2 mb-3"
                    value={taskData.title}
                    onChange={(e)=>
                        setTaskData({
                            ...taskData,
                            title:e.target.value
                        })
                    }
                    />

                    <textarea
                    placeholder="Description"
                    className="w-full border p-2 mb-3"
                    value={taskData.description}
                    onChange={(e)=>
                        setTaskData({
                            ...taskData,
                            description:e.target.value
                        })
                    }
                    />

                    <select
                    className="w-full border p-2 mb-3"
                    value={taskData.project}
                    onChange={(e)=>
                        setTaskData({
                            ...taskData,
                            project:e.target.value
                        })
                    }
                    >

                        <option value="">
                            Select Project
                        </option>

                        {
                            projects.map((project)=>(

                                <option
                                key={project._id}
                                value={project._id}
                                >
                                    {project.title}
                                </option>

                            ))
                        }

                    </select>

                    <select
                    className="w-full border p-2 mb-3"
                    value={taskData.priority}
                    onChange={(e)=>
                        setTaskData({
                            ...taskData,
                            priority:e.target.value
                        })
                    }
                    >

                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>

                    </select>

                    <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Create Task
                    </button>

                </form>

            </div>

            <div className="mt-10">

                <h2 className="text-2xl font-bold mb-5">
                    Tasks
                </h2>

                <div className="grid gap-4">

                    {
                        tasks.map((task)=>(

                            <div
                            key={task._id}
                            className="border p-4 rounded"
                            >

                                <h3 className="text-xl font-bold">
                                    {task.title}
                                </h3>

                                <p>
                                    {task.description}
                                </p>

                                <p className="mt-2">
                                    Status: {task.status}
                                </p>

                                <select
                                className="border p-2 mt-3"
                                value={task.status}
                                onChange={(e)=>
                                    updateStatus(
                                        task._id,
                                        e.target.value
                                    )
                                }
                                >

                                    <option value="Todo">
                                        Todo
                                    </option>

                                    <option value="In Progress">
                                        In Progress
                                    </option>

                                    <option value="Completed">
                                        Completed
                                    </option>

                                </select>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    )
}

export default Dashboard