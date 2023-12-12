const HomeModel = require("../Models/HomeModel");

exports.createProject = (req, res) => {
  const {
    department,
    projectName,
    projectEngineer,
    location,
    estimatedTime,
    estimatedBudget,
    completionStatus,
  } = req.body;
  console.log({
    department,
    projectName,
    projectEngineer,
    location,
    estimatedTime,
    estimatedBudget,
    completionStatus,
  });
  const newProject = new HomeModel({
    department: department,
    projectName: projectName,
    projectEngineer: projectEngineer,
    location: location ,
    estimatedTime: estimatedTime ,
    estimatedBudget: estimatedBudget ,
    completionStatus: completionStatus,
  });

  newProject.save()
    .then((result) => {
      res.status(201).json({
        message: 'Project created successfully',
        project: result,
      });
      console.log(`created ${result}`);
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

exports.getAllProjects = (req, res) => {
    HomeModel.find()
      .then((projects) => {
        res.status(200).json({
          message: 'Projects fetched successfully',
          projects: projects,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error.message,
        });
      });
  };