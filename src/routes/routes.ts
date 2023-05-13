import { Router} from "express";
import routerCategories from "./categories.routes";

const router = Router();

router.use("/categories", routerCategories)

export default router