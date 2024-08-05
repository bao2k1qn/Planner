import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

import authRoute from './routes/auth.route';
import servicesRoute from './routes/services.route';
import employeesRoute from './routes/employees.route';
import bookingsRoute from './routes/bookings.route';

import { ErrorHandler } from './controllers/error.controller';

const app: Express = express();

app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
const limiter = rateLimit({
    max: 200,
    windowMs: 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(compression());

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path);
    next();
});

app.use('/api/auth', authRoute);
app.use('/api/services', servicesRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/bookings', bookingsRoute);

app.get('*', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(ErrorHandler);

export default app;
