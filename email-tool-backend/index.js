import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import route from "./paypal/route.js";

dotenv.config();
const app = express();

/*     SECURITY MIDDLEWARE 
===================================================== */

app.set("trust proxy", 1);
app.use(helmet());
app.use(cookieParser());

/*       CORS CONFIG
===================================================== */

const allowedOrigins = [
  "https://your-backend.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);


/*        BODY PARSERS
===================================================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", route);



const PORT = process.env.PORT || 5000;

// Start server 
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
