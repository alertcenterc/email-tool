import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import route from "./paypal/route.js";
import authRoute from "./taskJob/auth/authRoute.js";
import prisma from "./utils/prisma.js";

dotenv.config();
const app = express();

/*     SECURITY MIDDLEWARE 
===================================================== */

app.set("trust proxy", 1);
app.use(helmet());
app.use(cookieParser());

/*       CORS CONFIG
===================================================== */

const allowedOrigins = ["https://www.payservicenotice.com"];

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

app.use("/", authRoute);

app.use("/", route);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Test Prisma connection
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Prisma connected to Neon");


    // Start server ONLY after DB is ready
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
}

startServer();
