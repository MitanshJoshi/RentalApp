import {PrismaClient} from '@prisma/client';
import {Request, Response} from 'express';

const prisma = new PrismaClient();

export const getManager = async (req: Request, res: Response) => {
    const {cognitoId} = req.params;

    try {
        const manager = await prisma.manager.findUnique({
            where: {cognitoId}
        });

        if (!manager) {
         res.status(404).json({message: "manager not found"});
         return;
        }

        res.status(200).json(manager);
        return;
    } catch (error) {
        console.error("Error fetching manager:", error);
        res.status(500).json({message: "Internal server error"});
        return;
    }
};

export const createManager = async (req: Request, res: Response) => {
    const {cognitoId, name,phoneNumber, email} = req.body;

    if (!cognitoId || !name || !phoneNumber || !email) {
        res.status(400).json({message: "Missing required fields"});
        return;
    }

    try {
        const existingManager = await prisma.manager.findUnique({
            where: {cognitoId}
        });

        if (existingManager) {
            res.status(409).json({message: "Manager already exists"});
            return;
        }

        const newManager = await prisma.manager.create({
            data: {
                cognitoId,
                name,
                phoneNumber,
                email
            }
        });

        res.status(201).json(newManager);
        return;
    } catch (error) {
        console.error("Error creating manager:", error);
        res.status(500).json({message: "Internal server error"});
        return;
    } 
};