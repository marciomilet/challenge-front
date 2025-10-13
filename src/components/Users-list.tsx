import { useEffect, useState } from "react"
import { Table } from "./table/table"
import { TableCell } from "./table/table-cell"
import { TableHeader } from "./table/table-header"
import { TableRow } from "./table/table-row"
import { TableTitleSearch } from "./table/table-title-search"

interface User {
  id: number
  name: string
  age: number
  income: number
  city: string
}

export function UsersList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => console.error("Erro ao buscar usuários:", error))
  }, [])

  return (
    <div>
      <TableTitleSearch>Users</TableTitleSearch>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Income</TableHeader>
            <TableHeader>City</TableHeader>
          </TableRow>
        </thead>

        <tbody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                {user.income.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>{user.city}</TableCell>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center text-sm text-zinc-400 py-2"
            >
              End of Table
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  )
}