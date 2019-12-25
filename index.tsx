// @deno-types="https://servestjs.org/@v0.26.0/types/react/index.d.ts"
import React from "https://dev.jspm.io/react";
// @deno-types="https://servestjs.org/@v0.26.0/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createRouter } from "https://servestjs.org/@v0.26.0/router.ts";

const port = Deno.env().PORT || 8899;
const router = createRouter();
router.handle("/", async req => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8"
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>Hello Servest!</body>
      </html>
    )
  });
});
router.listen(`:${port}`);
