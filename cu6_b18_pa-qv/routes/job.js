/*
    INSTRUCTION: setup the job routes according to the following requirements:
    - `GET /jobs`: List all jobs with sorting, pagination and filtering
    - `GET /jobs/:id`: Get a specific job by its id
    - `POST /jobs`: Add a new job
    - `PUT /jobs/:id`: Update a job
    - `DELETE /jobs/:id`: Delete a job
*/
const express = require('express')
const router = express.Router()
const JobController = require('../controllers/job')

router.use(express.json())

router.get('/', JobController.getAllJobs)
router.get('/:id', JobController.getJobById)
router.post('/', JobController.addNewJob)
router.put('/:id', JobController.updateJob)
router.delete('/:id', JobController.deleteJob)

module.exports = router