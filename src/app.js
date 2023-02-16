import userRoutes from "./routes/user.routes";
import database from './database';
import trainerRoutes from './routes/trainer.routes';

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("port", 3000);


app.use("/", userRoutes);
app.use("/trainer",trainerRoutes)

export default app;