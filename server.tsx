/** @jsx h */
import { h, jsx } from "https://deno.land/x/sift@0.6.0/mod.ts";
import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";

const App = () => (
  <div>
    <h1>Hello world!</h1>
  </div>
);
  
const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);
  

serve({
  "/": () => new Response("hello world"),
  "/blog/:slug": (request, connInfo, params) => {
    const post = `Hello, you visited ${params}!`;
    return new Response(post);
  },
  "/app":()=>jsx(<App/>),
  // The route handler of 404 will be invoked when a route handler
  // for the requested path is not found.
  // 404: () => new Response("not found"),
  404: () => jsx(<NotFound/>),
});