import Project from "../models/Project.js";

export const createProject = async (req,res) => {

    try {

        const {title,description,teamMembers} = req.body;

        const project = await Project.create({
            title,
            description,
            teamMembers,
            createdBy:req.user.id
        });

        res.status(201).json({
            success:true,
            project
        });

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

export const getProjects = async (req,res) => {

    try {

        const projects = await Project.find()
        .populate("teamMembers","name email")
        .populate("createdBy","name");

        res.status(200).json(projects);

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};