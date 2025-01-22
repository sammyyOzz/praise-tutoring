import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import HamburgerMenuIcon from "./icons/hamburger-menu";
import Socials from "./socials";
import Logo from "./logo";
import Link from "next/link";
import { routes } from "@/routes";

function Sidebar() {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant="outline">
          <HamburgerMenuIcon />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent p={7}>
        <DrawerHeader>
          <DrawerTitle>
            <Logo />
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody color="#ffffff">
          <Flex direction="column" align="flex-end" gap={10} pt={40}>
            {routes.map((route, i) => (
              <DrawerCloseTrigger key={i} pos="static">
                <Link href={route.path}>
                  <Text as="span" fontSize="lg" fontWeight="bold">
                    {route.name}
                  </Text>
                </Link>
              </DrawerCloseTrigger>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Socials color="#ffffff" w="30px" />
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
}

export default Sidebar;
