import React from "react"
import { Link } from "react-router-dom"
import Navigate from "./navigate"

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/" className="font-bold">
        AppName
      </Link>

      <Navigate />
    </header>
  )
}

export default Header