import { Button, Flex, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BiBook, BiBookAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import {
  Menu,
  MenuItem, ProSidebar, SidebarContent
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import useMedia from "use-media";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";

interface Props {}

const IconProps = {
  boxSize: 5,
};

const ProSidebarSection = (props: Props) => {
  const router = useRouter();
  const ButtonProps = (href: string) => ({
    fontSize: "lg",
    cursor: "pointer",
    mb: "1",
    py: "2",
    pl: "2",
    pr: "6",
    w: "100%",
    _hover: { bgColor: "gray.200", borderRadius: "lg" },
    transitionDuration: "100ms",
    className: router.route === href ? "active__sidebar" : null,
  });

  const isLessThan700 = useMedia({ maxWidth: 700 });
  const isLessThan400 = useMedia({ maxWidth: 400 });

  return isLessThan400 ? (
    // Return a sidebar but bottom version of it here
    <></>
  ) : (
    <ProSidebar
      collapsed={isLessThan700}
      style={{
        position: "sticky",
        top: "5px",
        height: "100vh",
      }}
    >
      <SidebarContent>
        <Menu iconShape="round">
          <MenuItem
            active={router.route === "/"}
            icon={<HomeIcon {...IconProps} />}
          >
            Home
          </MenuItem>
          <MenuItem icon={<SearchIcon {...IconProps} />}>Search</MenuItem>
          <MenuItem icon={<Icon as={MdLibraryBooks} {...IconProps} />}>
            Genres
          </MenuItem>
        </Menu>
        <Menu iconShape="round">
          <MenuItem icon={<Icon as={BiBookAlt} {...IconProps} />}>
            Want To Read
          </MenuItem>
          <MenuItem icon={<Icon as={BsBookmark} {...IconProps} />}>
            Currently Reading
          </MenuItem>
          <MenuItem icon={<Icon as={BiBook} {...IconProps} />}>
            Already Read
          </MenuItem>
        </Menu>
        <Flex justify="center" mt="8">
          <Button variant="outline" width="80%">
            Log In
          </Button>
        </Flex>
      </SidebarContent>
    </ProSidebar>
  );
};

export default ProSidebarSection;
