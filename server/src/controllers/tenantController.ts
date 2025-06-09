import {PrismaClient} from '@prisma/client';
import {Request, Response} from 'express';

const prisma = new PrismaClient();

export const getTenant = async (req: Request, res: Response) => {
    const {cognitoId} = req.params;

    try {
        const tenant = await prisma.tenant.findUnique({
            where: {cognitoId},
            include: {
                favorites:true
            }
        });

        if (!tenant) {
         res.status(404).json({message: "Tenant not found"});
         return;
        }

        res.status(200).json(tenant);
        return;
    } catch (error) {
        console.error("Error fetching tenant:", error);
        res.status(500).json({message: "Internal server error"});
        return;
    }
};

export const createTenant = async (req: Request, res: Response) => {
    const {cognitoId, name,phoneNumber, email} = req.body;

    if (!cognitoId || !name || !phoneNumber || !email) {
        res.status(400).json({message: "Missing required fields"});
        return;
    }

    try {
        const existingTenant = await prisma.tenant.findUnique({
            where: {cognitoId}
        });

        if (existingTenant) {
            res.status(409).json({message: "Tenant already exists"});
            return;
        }

        const newTenant = await prisma.tenant.create({
            data: {
                cognitoId,
                name,
                phoneNumber,
                email
            }
        });

        res.status(201).json(newTenant);
        return;
    } catch (error) {
        console.error("Error creating tenant:", error);
        res.status(500).json({message: "Internal server error"});
        return;
    } 
};