// server.js

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import deviceRouter from "./routes/devicesRoutes.js";
import router from "./routes/locationRoutes.js";
import cors from "cors";
import multer from "multer";
import Image from "./models/imageModel.js"



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./backend/uploads/");
  },
  filename: function (req, file, cb) {
   return  cb(null,file.originalname);
  },
});

const upload = multer({storage : storage})


dotenv.config();

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);
app.use(deviceRouter);

app.get('/getImage',async (req,res)=>{
  const allData = await Image.find()
  res.json(allData)
})
app.post('/upload', upload.single('file') ,(req,res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("Image uploaded successfully")

});

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));
