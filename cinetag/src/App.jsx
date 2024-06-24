import { RoutesPage } from "@/Routes/routes"

// Context Provider
import { PostProviderContext } from '@/Context/context.jsx'

function App() {
  return (
    <PostProviderContext>
      <RoutesPage/>
    </PostProviderContext>
  )
}

export default App
