import { Router, Request, Response } from "express";

const router: Router = Router()

//post a 
router.post('/', (req: Request, res: Response) => {
    res.status(501).json({ error: 'Not implemented' })
})

//get all s
router.get('/', (req: Request, res: Response) => {
    res.status(501).json({ error: 'Not implemented' })
})

//get a single 
router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

//update a 
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

//delete a 
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

export default router;


