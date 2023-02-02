import { useRoutes } from "react-router-dom"
import { routes } from "./routers"

function App() {
  const element = useRoutes(routes)
  return element
}

export default App
