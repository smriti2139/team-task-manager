import Task from "../models/Task.js";

export const createTask = async (req,res) => {

    try {

        const {
            title,
            description,
            project,
            assignedTo,
            priority,
            deadline
        } = req.body;

        const task = await Task.create({
            title,
            description,
            project,
            assignedTo,
            priority,
            deadline
        });

        res.status(201).json({
            success:true,
            task
        });

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

export const getTasks = async (req,res) => {

    try {

        const tasks = await Task.find()
        .populate("assignedTo","name email")
        .populate("project","title");

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

export const updateTaskStatus = async (req,res) => {

    try {

        const {status} = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {status},
            {new:true}
        );

        res.status(200).json(task);

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

export const deleteTask = async (req,res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success:true,
            message:"Task Deleted"
        });

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};