import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router: Router = Router()
const prisma = new PrismaClient()

//post a user
router.post('/', (req: Request, res: Response) => {
    const { } = req.body;
    res.status(501).json({ error: 'Not implemented' })
})

//get all users
router.get('/', async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
})

//get a single user
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })
    res.status(200).json(user)
})

//update a user
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

//delete a user
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

export default router;


