import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Welcome!!!' })
})

router.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'UP' })
})


export default router;