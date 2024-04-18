import { Request, Response } from 'express';
import { Charger } from '../models/Charger';
import { logError } from '../logger';

// Example chargers data (replace with actual database operations)
let chargers: Charger[] = [];

export const createCharger = (req: Request, res: Response) => {
  try {
    const newCharger: Charger = req.body
    chargers.push(newCharger)
    res.send(201).json(newCharger)

  } catch(err: any) {
    logError(`Error creating charger: ${err.message}`);
    res.status(500).send('Internal Server Error')
  }
}

export const getCharger = (req: Request, res: Response) => {
  try {
    const chargerId: number = parseInt(req.params.id)
    // need to add a DB lookup to find() method
    const charger = chargers.find((c) => c.id === chargerId)
    if(!charger) {
      res.status(404).send('Charger not found')
      return
    }
    res.json(charger)
  } catch(err: any) {
    logError(`Error getting charger: ${err.message}`)
    res.status(500).send('Internal Server Error')
  }
}

export const getAllChargers = (req: Request, res: Response) => {
  try {
    // need to add a findAll() DB lookup for all chargers below
    res.json(chargers)
  } catch(err: any) {
    logError(`Error getting all chargers: ${err.message}`)
    res.status(500).send('Internal Server Error')
  }
}

export const updateCharger = (req: Request, res: Response) => {
  try {
    const chargerId: number = parseInt(req.params.id)
    const updatedCharger: Charger = req.body
    const index = chargers.findIndex((c) => c.id === chargerId)

    if(index === -1) {
      res.status(404).send('Charger not found.')
      return
    }
    // add a save() to DB method to below
    chargers[index] = {...chargers[index], ...updatedCharger}
    res.json(chargers[index])

  } catch(err: any) {
    logError(`Error updating charger: ${err.message}`);
    res.status(500).send('Internal Server Error');
  }
}

export const deleteCharger = (req: Request, res: Response) => {
  try {
    const chargerId: number = parseInt(req.params.id);
    // add a save() to DB method to below
    chargers = chargers.filter((c) => c.id !== chargerId);
    res.sendStatus(204);
  } catch (err: any) {
    logError(`Error deleting charger: ${err.message}`);
    res.status(500).send('Internal Server Error');
}
}