import { HStack } from "@chakra-ui/react";
import YoutubeIcon from "./icons/youtube";
import InstagramIcon from "./icons/instagram";
import TiktokIcon from "./icons/tiktok";

function Socials({...props }) {
  return (
    <HStack fontSize="xl" gap={6}>
      <a href="#" target="_blank">
        <InstagramIcon w="40px" {...props} />
      </a>
      <a href="#" target="_blank">
        <TiktokIcon w="40px" {...props} />
      </a>
      <a href="#" target="_blank">
        <YoutubeIcon w="40px" {...props} />
      </a>
    </HStack>
  );
}

export default Socials;
