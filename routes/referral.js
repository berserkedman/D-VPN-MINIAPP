import express from 'express';
const router = express.Router();

router.post('/info', async (req, res) => {
  res.json({ referralCode: 'ABC123', count: 0 });
});

export default router;
