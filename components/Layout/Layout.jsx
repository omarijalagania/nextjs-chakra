import { Flex } from "@chakra-ui/react"
import React from "react"
import { Sidebar } from "pages/dashboard/components/Sidebar"
import { TopBar } from "components"

const Layout = ({ children }) => {
  return (
    <>
      <Flex width="100%">
        <TopBar />
        <Sidebar />
        {children}
      </Flex>
    </>
  )
}

export default Layout
