"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogCloseTrigger,
  DialogBody,
} from "@/components/ui/dialog";

interface MediaBlockProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  aspectRatio?: number | string;
  [key: string]: unknown;
}

function MediaBlock({ src, alt = "", type = "image", aspectRatio, ...props }: MediaBlockProps) {
  if (type === "video") {
    return (
      <Box
        pos="relative"
        aspectRatio={aspectRatio}
        borderRadius={14}
        overflow="hidden"
        boxShadow="0 12px 30px -18px rgba(26, 82, 118, 0.4)"
        {...props}
      >
        <video
          src={src}
          controls
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Box>
    );
  }

  return (
    <DialogRoot placement="center" size="lg">
      <DialogTrigger asChild>
        <Box
          as="button"
          pos="relative"
          aspectRatio={aspectRatio}
          w="100%"
          borderRadius={14}
          overflow="hidden"
          boxShadow="0 12px 30px -18px rgba(26, 82, 118, 0.4)"
          bg="rgba(26, 82, 118, 0.06)"
          cursor="pointer"
          {...props}
        >
          <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
        </Box>
      </DialogTrigger>
      <DialogContent>
        <DialogCloseTrigger />
        <DialogBody p={[4, null, 6]}>
          <Box pos="relative" aspectRatio={aspectRatio} w="100%">
            <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}

export default MediaBlock;
