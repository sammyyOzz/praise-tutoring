"use client";

import ContactUsForm from "./contact-us-form";
import Backdrop from "./ui/backdrop";
import { Button } from "./ui/button";
import { Box, Text, useDisclosure } from "@chakra-ui/react";

interface BeginHereProps {
  buttonText: string | React.ReactNode;
}

function BeginHere({ buttonText }: BeginHereProps) {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        as={Box}
        variant="solid"
        color="#ffffff"
        fontSize="lg"
        fontWeight="bold"
        px={12}
        py={6}
        onClick={onOpen}
      >
        {buttonText}
      </Button>

      <Backdrop isOpen={open} onClose={onClose}>
        <Box w="500px" aspectRatio={1.2} bg=" #ffffff" p={6} onClick={(e) => e.stopPropagation()}>
          <Text fontWeight="bold" fontSize="2xl" mb={4}>Aspiring to Become a Tutor?</Text>
          <ContactUsForm successCallback={onClose} />
        </Box>
      </Backdrop>
    </>
  );
}

export default BeginHere;
