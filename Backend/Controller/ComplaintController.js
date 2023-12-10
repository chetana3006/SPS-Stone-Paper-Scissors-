const Complaint = require('../Models/ComplaintModel'); 

const createComplaint = async (req, res) => {
  try {
    const { description, location, picture } = req.body;
    const newComplaint = new Complaint({ description, location, picture });
    const savedComplaint = await newComplaint.save();
    console.log(savedComplaint);
    res.status(201).json(savedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all complaints
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get complaint by ID
const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update complaint by ID
const updateComplaint = async (req, res) => {
  try {
    const { description, location, picture } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, { description, location, picture }, { new: true });
    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.status(200).json(updatedComplaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete complaint by ID
const deleteComplaint = async (req, res) => {
  try {
    const deletedComplaint = await Complaint.findByIdAndDelete(req.params.id);
    if (!deletedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.status(200).json({ message: 'Complaint deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
};
