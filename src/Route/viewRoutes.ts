import express, { Router } from "express";
import { viewController } from "../Controller/viewController";

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/our-services", viewController.getServices);
router.get("/about-us", viewController.getAbout);
router.get("/join-us", viewController.getSignUp);
router.get("/sign-in", viewController.getSignIn);

export default router;
