import { Request, Response } from "express";

export class viewController {
    static getHome(req: Request, res: Response) {
        res.status(200).render("index", {
            title: "URL Shortener | Ultimate URL Shortener",
        });
    }

    static getServices(req: Request, res: Response) {
        res.status(200).render("services", {
            title: "Our Services | Ultimate URL Shortener",
        });
    }

    static getAbout(req: Request, res: Response) {
        res.status(200).render("about", {
            title: "About Us | Ultimate URL Shortener",
        });
    }

    static getSignIn(req: Request, res: Response) {
        res.status(200).render("sign-in", {
            title: "Sign In | Ultimate URL Shortener",
        });
    }

    static getSignUp(req: Request, res: Response) {
        res.status(200).render("join", {
            title: "Join Us | Ultimate URL Shortener",
        });
    }
}
