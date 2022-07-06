import { Tbody, Tr, Td } from "@chakra-ui/react"

const TableOrders = ({ order }) => {
  return (
    <Tbody>
      <Tr>
        <Td>{order.status}</Td>
        <Td>{order.country}</Td>
        <Td isNumeric>{order.price}</Td>
        <Td>{order.first_name + " " + order.last_name}</Td>
        <Td>{order.email}</Td>
      </Tr>
    </Tbody>
  )
}

export default TableOrders
