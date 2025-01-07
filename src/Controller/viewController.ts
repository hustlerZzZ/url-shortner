import { Request, Response } from "express";

export function getHome(req: Request, res: Response) {
    res.status(200).render('index', {
        title: 'URL Shortener | Ultimate URL Shortener',
    });
}