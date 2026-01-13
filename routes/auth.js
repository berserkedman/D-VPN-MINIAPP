import express from 'express';
const router = express.Router();

router.post('/login', async (req, res) => {
  res.json({ token: 'fake-token' });
});

export default router;
