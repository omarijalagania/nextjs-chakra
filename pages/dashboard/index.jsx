import React from "react"
import { supabase } from "../../supabase-client"
import TableOrders from "./Table"
import { Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react"

const index = ({ fb_orders }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order Status</Th>
            <Th>Country</Th>
            <Th isNumeric>Price</Th>
            <Th>Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        {fb_orders.map((order) => {
          return <TableOrders key={order.id} order={order} />
        })}
      </Table>
    </TableContainer>
  )
}

export default index

export const getServerSideProps = async (context) => {
  const { data: fb_orders, error } = await supabase.from("fb_orders").select()

  if (error) {
    // Return 404 response.
    // No bikes found or something went wrong with the query
    return {
      notFound: true,
    }
  }

  return {
    props: {
      fb_orders,
    },
  }
}
