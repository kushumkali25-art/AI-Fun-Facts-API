import express from "express";
import dotenv from "dotenv";
import funFactRoute from "./funFactRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("public")); 
app.use(funFactRoute);

app.listen(PORT, () => {
  console.log(`Fun Facts API running at http://localhost:${PORT}`);
});