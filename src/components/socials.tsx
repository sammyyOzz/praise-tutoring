import { HStack } from "@chakra-ui/react";
import LinkedInIcon from "./icons/linked-in";
import FacebookIcon from "./icons/facebook";
import YoutubeIcon from "./icons/youtube";
import InstagramIcon from "./icons/instagram";

function Socials() {
  return (
    <HStack fontSize="2xl" gap={6}>
      <FacebookIcon />
      <LinkedInIcon />
      <YoutubeIcon />
      <InstagramIcon />
    </HStack>
  );
}

export default Socials;
