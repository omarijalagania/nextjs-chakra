import React from "react"
import { supabase } from "../../supabase-client"
import { Box } from "@chakra-ui/react"
import { DataTable } from "./components/DataTable/DataTable"
import { columns } from "./components/DataTable/TableColumns"

import Statistics from "../../components/Statistics"
import Layout from "../../components/Layout/Layout"

const index = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Box
        overflowY="scroll"
        shadow="md"
        my={"78px"}
        maxHeight="50vh"
        overflowX="hidden"
        width="85%"
        position="absolute"
        right="0"
      >
        <DataTable columns={columns} data={data} />
      </Box>
      <Box marginTop="300px">
        <Statistics />
      </Box>
    </Layout>
  )
}

export default index

export const getServerSideProps = async (_context) => {
  const { data: fb_orders, error } = await supabase.from("fb_orders").select()

  if (error) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: fb_orders,
    },
  }
}
