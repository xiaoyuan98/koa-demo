import Router from "koa-router"
import demoController from "../api/demoController";

export const demoRoutes = new Router();

demoRoutes.get("/demo", demoController.demo);
