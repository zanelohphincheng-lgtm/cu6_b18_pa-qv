/*
    INSTRUCTION: setup the routes for the employer entity according to the following requirements:
    - `GET /employers`: List all employers
    - `GET /employers/:id`: Get a specific employer by its id
    - `POST /employers`: Add a new employer
    - `PUT /employers/:id`: Update an employer
    - `DELETE /employers/:id`: Delete an employer
*/
const express = require('express')
const router = express.Router()
const EmployerController = require('../controllers/employer')

router.use(express.json())

router.get('/', EmployerController.getAllEmployers)
router.get('/:id', EmployerController.getEmployerById)
router.post('/', EmployerController.addNewEmployer)
router.put('/:id', EmployerController.updateEmployer)
router.delete('/:id', EmployerController.deleteEmployer)

module.exports = router