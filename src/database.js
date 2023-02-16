import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose
  .connect("mongodb://0.0.0.0:27017/pokemon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));


