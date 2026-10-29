import express from "express";
import{callGemini}from"./geminiService.js";
const router  = express.Router();
router.get("/fun-fact",async(req,res)=>{
    try{
        const fact =await callGemini(
    "Give me one random intersting fun fact.keep it to a single short sentence."
        );
        return res.status(200).json({fact});
    }catch(err){
        console.error("Error in/fun-fact route:",err.message);
        return res.status(500).json({error:"Filed to fetch fun fact"});
    }
});
export default router;