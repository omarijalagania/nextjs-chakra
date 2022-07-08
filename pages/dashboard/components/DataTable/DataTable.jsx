import * as React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"

const DataTable = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr
            position={"sticky"}
            backgroundColor="#AEC8CA"
            top={"0"}
            width={"100%"}
            key={Math.random()}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <Th
                key={Math.random()}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <Tr key={Math.random()} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td
                  fontSize="13px"
                  key={Math.random()}
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                >
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default DataTable
