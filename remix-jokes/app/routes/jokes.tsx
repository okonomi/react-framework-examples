import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import styleUrl from "~/styles/jokes.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleUrl,
    }
  ]
}

export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
