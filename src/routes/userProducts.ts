import { Router, Request, Response } from "express";

const router: Router = Router()

//post a product
router.post('/', (req: Request, res: Response) => {
    res.status(501).json({ error: 'Not implemented' })
})

//get all products
router.get('/', (req: Request, res: Response) => {
    res.status(501).json({ error: 'Not implemented' })
})

//get a single product
router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

//update a product
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

//delete a product
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(501).json({ error: 'Not implemented' })
})

export default router;


