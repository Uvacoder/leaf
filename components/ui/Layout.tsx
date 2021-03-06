import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";
import useMedia from "use-media";
import Navbar from "./Navbar";
import ProSidebarSection from "./Sidebar";
import Tabbar from "./Tabbar";

type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	const isMoreThan400 = useMedia({ minWidth: 400 });

	return (
		<>
			<Head>
				<title>Leaf</title>
			</Head>
			<Flex flexDir="column" justifyContent="space-between" minH="100vh">
				<Box pos="sticky" top="0" zIndex="100">
					<Box height="5px" bgColor="blue.400" />
					<Navbar />
				</Box>
				{isMoreThan400 ? (
					<Flex bgColor="#edf2f7">
						<ProSidebarSection />
						<Box w="100%">{children}</Box>
					</Flex>
				) : (
					<>
						<Box bgColor="#edf2f7" flex="1">{children}</Box>
						<Tabbar />
					</>
				)}
			</Flex>
		</>
	);
};

export default Layout;
