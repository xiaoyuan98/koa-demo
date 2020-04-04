import CombineRoutes from "koa-combine-routers";

import {demoRoutes} from "./demoRouter";

export default CombineRoutes(demoRoutes);