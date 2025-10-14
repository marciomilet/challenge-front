import { useEffect, useState } from "react"
import { Table } from "../table/table"
import { TableCell } from "../table/table-cell"
import { TableHeader } from "../table/table-header"
import { TableRow } from "../table/table-row"
import { TableTitleSearch } from "../table/table-title-search"

interface Campaign {
  id: number
  name: string
  user_count: number
  date: string
  average_income: number
}

export function CampaignsList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/campaigns/")
      .then((response) => response.json())
      .then((data) => {
        setCampaigns(data)
      })
      .catch((error) => console.error("failed to get campaigns", error))
  }, [])

  return (
    <div>
      <TableTitleSearch>Campaigns</TableTitleSearch>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Amount of users</TableHeader>
            <TableHeader>date</TableHeader>
            <TableHeader>average_income</TableHeader>
          </TableRow>
        </thead>

        <tbody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.id}</TableCell>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.user_count}</TableCell>
              <TableCell>
                {new Date(campaign.date).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>
                {campaign.average_income.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
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