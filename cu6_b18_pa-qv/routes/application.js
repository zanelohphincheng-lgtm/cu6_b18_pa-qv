/*
    INSTRUCTION: This file defines the routes for managing job applications.
    - `GET /applications?job=xxx`: Get all applications for a specific job
    - `POST /applications`: Create a new application for a job
*/
const express = require('express')
const router = express.Router()
const ApplicationController = require('../controllers/application')

router.use(express.json())

router.get('/', ApplicationController.getAllApplications)
router.post('/', ApplicationController.submitApplication)

module.exports = router