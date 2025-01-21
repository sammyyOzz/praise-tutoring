import { Box } from '@chakra-ui/react'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
  [anyProp: string]: unknown;
}

function Container({ children, ...props }: ContainerProps) {
  return (
    <Box mx="auto" maxW="1400px" px="30px" {...props}>
      {children}
    </Box>
  )
}

export default Container