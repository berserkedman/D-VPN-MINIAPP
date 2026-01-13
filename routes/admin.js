import express from 'express';
const router = express.Router();

router.get('/stats', async (req, res) => {
  res.json({ users: 0, active: 0 });
});

export default router;
