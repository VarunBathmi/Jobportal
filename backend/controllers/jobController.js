const Job = require("../models/Job");
const User = require("../models/User");
const Application = require("../models/Application");
const SavedJob = require("../models/SavedJob");

//@desc Create a new job (Employer only)
exports.createJob = async (req, res) => {
    try{
        if (req.user.role !== "employer"){
            return res.status(403).json({ message: "Only employers can post jobs"});
        }

        const job = await Job.create({ ...req.body, company: req.user._id});
        res.status(201).json(job);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getJob = async (req, res) => {

    const {
        keyword,
        location,
        category,
        type,
        minSalary,
        maxSalary,
        userId,
    } = req.query;

    const query = {
        isClosed: false,
        ...(keyword && { title: { $regex: keyword, $options: "i"}}),
        ...(location && { location: { $regex: location, $options: "i"}}),
        ...(category &&  { category }),
        ...(type && { type }),
    };

    if(minSalary || maxSalary) {
            query.$and = [];

            if (minSalary){
                query.$and.push({ salaryMax: { $gte: Number(minSalary) }});
            }

            if (maxSalary){
                query.$and.push({ salaryMin: { $gte: Number(maxSalary) }});
            }

            if (query.$and.length === 0){
                delete query.$and;
            }
    }

   try {
    const jobs = await Job.find(query).populate(
        "Company",
        "name companyName companyLogo"
    );

    let SavedJobIds = [];
    let appliedJobStatusMap = {};

    if (userId) {
        //Saved Jobs
        const savedJobs = await SavedJob.find({ jobseeker: userId}).select("job");
        SavedJobIds = savedJobs.map((s) => String(s.job));

        // Applications
        const applications = await Application.find({ applicant: userId }).select("job status");
        applications.forEach((app) => {
            appliedJobStatusMap[String(app.job)] = app.status;
        });
    }
    // Add isSaved anmd applicationStatus to each job 
    const jobWithExtras= jobs.map((job) => {
        const jobIdStr = String(job._id);
        return {
            ...job.toObject(),
            isSaved: SavedJobIds.includes(jobIdStr),
            applicationStatus: appliedJobStatusMap[jobIdStr] || null,
        };
    });
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 

// @desc Get jobs for Logged in user (Employer can see posted jobs)
exports.getJobsEmployer = async (req, res) => {
   try{

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// @desc Get single Job by ID
exports.getJobById = async (req, res) => {
   try{

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//@desc Update a job (Employer only
exports.updateJob = async (req, res) => {
   try{

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//@desc Delete a job (Employer only
exports.deleteJob = async (req, res) => {
   try{

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Toggle Close Status for a job (Employer only
exports.toggleCloseJob = async (req, res) => {
   try{

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};