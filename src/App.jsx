import { useRoutes } from "react-router-dom"
import { routes } from "./routers"
import { message } from 'antd'

message.config({
  maxCount: 3
})

function App() {
  const element = useRoutes(routes)
  return element
}

export default App
