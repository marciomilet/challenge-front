import { CampaignsList } from "./components/campaigns/campaign-list"
import { Header } from "./components/header"
import { Upload } from "./components/upload/upload"
import { UsersList } from "./components/users/Users-list"

 import { Routes, Route } from 'react-router-dom'


export function App() {
  return (
    <> 
    <Header />
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/campaigns" element={<CampaignsList />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </>
  )
}

export default App
