import dotenv from 'dotenv';
dotenv.config();

import app from './src/app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
