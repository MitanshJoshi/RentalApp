 import express from 'express';
 import dotenv from 'dotenv';
 import cors from 'cors';
 import morgan from 'morgan';
 import helmet from 'helmet';
 import bodyParser from 'body-parser';
 import { authMiddleware } from './middleware/authMiddleware';
 import tenantRoutes from './routes/tenantRoutes';
 import managerRoutes from './routes/managerRoutes';


 dotenv.config();
 const app = express();

 app.use(express.json());
 app.use(helmet());
 app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
 app.use(cors());
 app.use(morgan('common'));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

 app.get('/',(req,res)=>{
        res.send('This is home route!');
 })


 app.use("/tenants",authMiddleware(["tenant"]),tenantRoutes);
 app.use("/managers",authMiddleware(["manager"]),tenantRoutes);

 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });
 