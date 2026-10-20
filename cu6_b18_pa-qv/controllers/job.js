/*
    INSTRUCTION: setup the job controller with the following functions:
    - getJobs - Retrieve all jobs (use `populate()` to get employer details)
    - getJob - Retrieve a specific job (use `populate()` to get employer details)
    - addNewJob - Add a new job
    - updateJob - Update a job
    - deleteJob - Delete a job
*/
const Job = require("../models/job");

exports.getAllJobs = async (req, res) => {
    const { category, sortBy, sort = 1, page = 1, limit = 10 } = req.query;
    let filter = {};

    if (category) {
        filter = {category: category};
    }

    const sortOptions = {};
    if (sortBy && sort) {
        if (sortBy == "postedDate") {
            sortOptions.postedDate = Number(sort);
        }
        if (sortBy == "title") {
            sortOptions.title = Number(sort);
        }
    }

    const allJob = await Job.find(filter).sort(sortOptions).populate("employer");
    res.json(allJob);
};

exports.getJobById = async (req, res) => {
    const selectedJob = await Job.findOne({ _id: req.params.id }).populate("employer");
    res.json(selectedJob);
};

exports.addNewJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json({ message: "Job Added Successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const editedJob = await Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(editedJob);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const allJob = await Job.findOneAndDelete({ _id: req.params.id });
        res.status(200).send("Job Deleted Successfully").json(allJob);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
