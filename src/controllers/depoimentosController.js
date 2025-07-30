import mongoose from "mongoose";
import Depoimento from "../models/Depoimento.js";
import e from "express";

class DepoimentosController {
  static async getDepoimentos(req, res) {
    try {
      const depoimentos = await Depoimento.find({});
      res.status(200).json(depoimentos);
    } catch (error) {
      res.status(500).json({ message: "Error fetching depoimentos", error: error.message });
      
    }
  }

  static async getDepoimentosRandom(req, res) {
    try {
      const depoimentos = await Depoimento.aggregate([{ $sample: { size: 3 } }]);
      if(!depoimentos || depoimentos.length === 0) {
        return res.status(404).json({ message: "No depoimentos found" });
      }
      res.status(200).json(depoimentos);
    } catch (error) {
      res.status(500).json({ message: "Error fetching random depoimentos", error: error.message });
    }
  }

  static async createDepoimento(req, res) {
    try {
      const newDepoimento = new Depoimento(req.body);
      await newDepoimento.save();
      res.status(201).json(newDepoimento);
    } catch (error) {
      res.status(400).json({ message: "Error creating depoimento", error: error.message });
    }
  }
  static async updateDepoimento(req, res) {
    const { id } = req.params;
    try {
      const updatedDepoimento = await Depoimento.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedDepoimento) {
        return res.status(404).json({ message: "Depoimento not found" });
      }
      res.status(200).json(updatedDepoimento);
    } catch (error) {
      res.status(400).json({ message: "Error updating depoimento", error: error.message });
    }
  }   
  static async deleteDepoimento(req, res) {
    const { id } = req.params;
    try {
      const deletedDepoimento = await Depoimento.findByIdAndDelete(id);
      if (!deletedDepoimento) {
        return res.status(404).json({ message: "Depoimento not found" });
      }
      res.status(200).json({ message: "Depoimento deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Error deleting depoimento", error: error.message });
    }
  } 
} 

export default DepoimentosController;