const express = require('express');
const router = express.Router();
const Destination = require('../models/destinationModel'); // Import the Destination model

// Create a new destination
exports.createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const savedDestination = await newDestination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({ error: 'Could not create a new destination' });
  }
};

// Get all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(400).json({ error: 'Could not retrieve destinations' });
  }
};

// Get a single destination by ID

exports.getDestinationByState = async (req, res) => {
  try {
    const { dState } = req.params;
    const destination = await Destination.find({ dState });

    if (!destination) {
      res.status(404).json({ error: 'Destination not found' });
    } else {
      res.status(200).json(destination);
      console.log(destination);
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the destination' });
  }
};


// Update a destination by ID
exports.updateDestinationById = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDestination) {
      res.status(404).json({ error: 'Destination not found' });
    } else {
      res.status(200).json(updatedDestination);
    }
  } catch (error) {
    res.status(400).json({ error: 'Could not update the destination' });
  }
};

// Delete a destination by ID
exports.deleteDestinationById = async (req, res) => {
  try {
    const deletedDestination = await Destination.findByIdAndRemove(req.params.id);
    if (!deletedDestination) {
      res.status(404).json({ error: 'Destination not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(400).json({ error: 'Could not delete the destination' });
  }
};
