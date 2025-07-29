const express = require('express')
const Job = require('../Models/jobModel')

const router = express.Router()


// Create REST APIs:
// GET /api/jobs – fetch all jobs ✅
// GET /api/jobs/:id – fetch job by ID  ✅
// POST /api/jobs – add new job ✅

// Input validation and error handling ❌

// Create API
router.post('/api/jobs', async (req, res) =>{
    const {title, company, type, location, description} = req.body

    try{
        const addJob = await Job.create({
            title: title,
            company: company,
            type: type,
            location: location,
            description: description,
        })
        res.status(201).json(addJob)
    }catch(error){
        console.log(error)
        res.status(400).json({
            error: error.message
        })
    }
})


// Read or Get API
router.get('/api/jobs', async (req, res) =>{
    try {
        const getAllJobs = await Job.find()
        res.status(200).json(getAllJobs)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})


// Get Single Job
router.get('/api/jobs/:id', async (req, res) =>{
    const {id} = req.params

    try {
        const getJob = await Job.findById({_id: id})
        res.status(200).json(getJob)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = router