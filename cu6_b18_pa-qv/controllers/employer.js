/*
    INSTRUCTION: setup the employer controller with the following functions:
    - getEmployers - Retrieve all employers
    - getEmployer - Retrieve a specific employer
    - addNewEmployer - Add a new employer
    - updateEmployer - Update an employer
    - deleteEmployer - Delete an employer
*/
const Employer = require("../models/employer");

exports.getAllEmployers = async (req, res) => {
    const allEmployers = await Employer.find();
    res.json(allEmployers);
};

exports.getEmployerById = async (req, res) => {
    const selectedEmployer = await Employer.findOne({ _id: req.params.id });
    res.json(selectedEmployer);
};

exports.addNewEmployer = async (req, res) => {
    try {
        const newEmployer = new Employer(req.body);
        await newEmployer.save();
        res.status(201).json({ message: "Employer Added Successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEmployer = async (req, res) => {
    try {
        const editedEmployer = await Employer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(editedEmployer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteEmployer = async (req, res) => {
    try {
        const allEmployer = await Employer.findOneAndDelete({ _id: req.params.id });
        res.status(200).send("Employer Deleted Successfully").json(allEmployer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
