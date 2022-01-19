import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('!CHEGOU UMA REQUISIÇÃO 🔥');
  console.log('body = ', req.body);

  return res.status(200).send({ status: 'ok' });
});

export default router;
