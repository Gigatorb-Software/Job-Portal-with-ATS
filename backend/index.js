import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js"; 
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path"

dotenv.config({});
connectDB();
const PORT = process.env.PORT || 8080;
const app = express();

const _dirname = path.resolve()
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    // origin:'http://localhost:5173',
    origin:'https://job-portal-with-ats.onrender.com',
    credentials:true
}

app.use(cors(corsOptions));

// const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend", "dist", "index.html"))
})

app.listen(PORT,()=>{
    // connectDB();
    console.log(`Server running at port ${PORT}`);
})
// R4A5iACY6EAqj7Ka
// R4A5iACY6EAqj7Ka
// mongodb+srv://amity:R4A5iACY6EAqj7Ka@cluster0.bg1as.mongodb.net/