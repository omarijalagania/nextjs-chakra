import React from "react"
import { supabase } from "config"
import { Box, Flex } from "@chakra-ui/react"
import { DataTable } from "pages/dashboard/components/DataTable"
import { columns } from "utils"
import Layout from "components/Layout"
import dynamic from "next/dynamic"

const Statistics = dynamic(() => import("components/Statistics"), {
  ssr: false,
})
const SimplePieChart = dynamic(() => import("components/SimplePieChart"), {
  ssr: false,
})

const index = ({ data }) => {
  console.log("🚀 ~ index ~ data", data)

  const filteredData = data.filter(
    (item) =>
      (item.created_at = item.created_at.replace(/T|-/g, "/").slice(0, 16))
  )

  return (
    <Layout>
      <Box
        overflowY="scroll"
        shadow="md"
        my={"78px"}
        maxHeight="50vh"
        overflowX="scroll"
        width="85%"
        position="absolute"
        right="0"
      >
        <DataTable columns={columns} data={data} />
      </Box>
      <Flex
        position="absolute"
        marginTop="75px"
        left={"15%"}
        bottom={0}
        alignItems="center"
      >
        <Box shadow="md" padding={10}>
          <Statistics data={data} />
        </Box>
        <Box shadow="md" padding={10}>
          <SimplePieChart data={data} />
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
