import express from 'express';
import cors from 'cors';
import router from './routes/number.js';

const app = express();
const PORT = 9876;

app.use(cors());
app.use('/numbers', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
