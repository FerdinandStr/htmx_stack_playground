import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
const BaseHtml = ({}) => `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>THE AMAZING STACK</title>
</head>
<body>I am the BOOODY</body>
`;
const jsx = Html.createElement("h1", null, "MY GAWD THIS IS JSX");
const app = new Elysia()
    .use(html())
    .get("/", ({ html }) => html(Html.createElement(BaseHtml, null)))
    .listen(3000);
console.log(`Running at http://${app.server?.hostname}:${app.server?.port}`);
