import Koa from "koa";
import path from "path";
import router from "./routes/routes";
import helmet from "koa-helmet";
import statics from "koa-static";
import koaBody from "koa-body";
import koaCors from "@koa/cors";
import jsonutil from "koa-json";
import koaCompose from "koa-compose";
import koaCompress from "koa-compress";

const app = new Koa();

const isDevMode = process.env.NODE_ENV === "'production'" ? false : true;
/**
 * 使用koa-compose集成中间件
 */
const middleware = koaCompose([
  helmet(),
  statics(path.join(__dirname, "../public")),
  koaBody(),
  koaCors(),
  jsonutil({pretty: false, param: 'pretty'})
])

if (!isDevMode) {
  app.use(koaCompress())
}
app.use(middleware);
app.use(router());

app.listen(3000)

