import { LiveReload, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: so great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  )
}
