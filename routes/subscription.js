import express from 'express';
const router = express.Router();

router.post('/activate', async (req, res) => {
  res.json({ success: true });
});

export default router;
