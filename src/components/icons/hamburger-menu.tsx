import { Icon } from "@chakra-ui/react";

export default function HamburgerMenuIcon({ ...props }) {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </Icon>
  );
}
