import React from "react";
import { supabase } from "../../supabase-client";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";
import { DataTable } from "./components/DataTable/DataTable";
import { columns } from "./components/DataTable/TableColumns";

const index = ({ fb_orders }) => {
  return (
    <Flex w="100%">
      <Sidebar />
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
