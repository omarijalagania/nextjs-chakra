import React from "react"
import { supabase } from "../../supabase-client"
import { Box, Flex } from "@chakra-ui/react"
import { DataTable } from "./components/DataTable/DataTable"
import { columns } from "./components/DataTable/TableColumns"

import Layout from "../../components/Layout/Layout"
import dynamic from "next/dynamic"

const Statistics = dynamic(() => import("../../components/Statistics"), {
  ssr: false,
})

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
      <Flex>
        <Box
          marginTop="50px"
          left="15%"
          shadow="md"
          p={10}
          position="absolute"
          bottom={0}
        >
          <Statistics data={data} />
        </Box>
      </Flex>
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
