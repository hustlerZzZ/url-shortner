import express from "express";
import {getHome} from "../Controller/viewController";

const router = express.Router();

router.get("/", getHome);

export default router;
