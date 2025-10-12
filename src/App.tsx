import { Header } from "./components/header"
import { Table } from "./components/table/table"
import { TableCell } from "./components/table/table-cell"
import { TableHeader } from "./components/table/table-header"
import { TableTitleSearch } from "./components/table/table-title-search"

export function App() {
  return (
    <div>
      <Header />
      <TableTitleSearch children="Users" />
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Income</TableHeader>
            <TableHeader>City</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>$50,000</TableCell>
            <TableCell>New York</TableCell>
          </tr>
          <tr>
            <TableCell>2</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>25</TableCell>
            <TableCell>$60,000</TableCell>
            <TableCell>Los Angeles</TableCell>
          </tr>
        </tbody>
        
        <tfoot>
          <tr>
            <TableCell colSpan={5} className="text-center text-sm text-zinc-400 py-2">
              End of Table
            </TableCell>
          </tr>
        </tfoot>

      </Table>
      
    </div>
  )
}

export default App
