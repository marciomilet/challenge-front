import { Header } from "./components/header"
import { UsersList } from "./components/Users-list"

export function App() {
  return (
    <div className="max-w-[1216] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <UsersList />
    </div>
  )
}

export default App
