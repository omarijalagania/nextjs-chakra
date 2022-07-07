import React from "react";
import { supabase } from "../../supabase-client";
import TableOrders from "./Table";
import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import { DataTable } from "./DataTable";

const index = ({ fb_orders }) => {
  const columns = [
    {
      Header: "Name",
      accessor: "first_name",
    },
    {
      Header: "Address",
      accessor: "billing_address",
    },
    {
      Header: "Country",
      accessor: "country",
    },

    {
      Header: "Status",
      accessor: "transaction_status_description",
    },
    {
      Header: "Company",
      accessor: "official_company_name",
    },
    {
      Header: "Price",
      accessor: "price",
      isNumeric: true,
    },
  ];
  return (
    <Flex w="100%">
      <Sidebar />
      {/* <Spacer /> */}
      {/* <TableContainer>
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
            return <TableOrders key={order.id} order={order} />;
          })}
        </Table>
      </TableContainer> */}
      <Box>
        <DataTable columns={columns} data={fb_orders} />
      </Box>
    </Flex>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const { data: fb_orders, error } = await supabase.from("fb_orders").select();

  if (error) {
    // Return 404 response.
    // No bikes found or something went wrong with the query
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fb_orders,
    },
  };
};
