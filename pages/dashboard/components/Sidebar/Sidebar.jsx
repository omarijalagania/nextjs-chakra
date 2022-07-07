import React, { useState } from "react"
import { Flex, Text, Divider, Avatar, Heading } from "@chakra-ui/react"
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi"

import NavItem from "./NavItem"

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large")
  return (
    <Flex
      shadow="md"
      pos="sticky"
      h="100vh"
      zIndex="50"
      bg={"white"}
      //   boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      //   borderRadius={navSize == "small" ? "15px" : "30px"}
      //w={navSize == "small" ? "75px" : "200px"}
      width="14%"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        {/* User Section */}
        <Flex
          p="2%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Flex mt={4} align="center">
            <Avatar
              size="sm"
              src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
            />
            <Flex
              noOfLines={1}
              flexDir="column"
              ml={4}
              display={navSize == "small" ? "none" : "flex"}
            >
              <Heading
                as="h3"
                display={{ base: "none", md: "block" }}
                size="sm"
              >
                Omari Jalagania
              </Heading>
              <Text display={{ base: "none", md: "block" }} color="gray">
                Admin
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Divider display={navSize == "small" ? "none" : "flex"} />
        {/* Button Section */}
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          active
        />
        <NavItem navSize={navSize} icon={FiUser} title="Clients" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
      </Flex>
    </Flex>
  )
}
