import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

async function listener(request, respose) {
  await jsonHandler(request, respose);
  console.log(request.body);
}

http.createServer(listener).listen(3333);
