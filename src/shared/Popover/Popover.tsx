import { Popover as ChakraPopover, Button, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react";

export function Popover({ children, content }: { children: React.ReactNode, content: () => React.ReactNode }) {
  return (
    <ChakraPopover placement="top-end">
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {content()}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </ChakraPopover>
  )
}