/*
    INSTRUCTION: setup the controller functions to handle job applications
    - getApplicationsByJob - Retrieve all applications for a specific job (use `populate()` to get job details)
    - createApplication - Create a new application for a job (ensure no duplicate applications for the same email and job)
*/
const Application = require("../models/application");
const Job = require("../models/job");

exports.getAllApplications = async (req, res) => {
    try {
        const { job = Job._id } = req.query;
        const allApplications = await Application.find({ job: job }).populate("job");
        res.json(allApplications);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

exports.submitApplication = async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
