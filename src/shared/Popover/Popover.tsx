import {
  Popover as ChakraPopover,
  Button,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
  usePopover,
} from '@chakra-ui/react';

export function Popover({
  children,
  content,
  isOpen,
}: {
  children: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  content: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <ChakraPopover
      isLazy={true}
      lazyBehavior="unmount"
      isOpen={isOpen}
      placement="top-end"
    >
      <PopoverTrigger>
        {typeof children === 'function' ? children(isOpen) : children}
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>{content}</PopoverBody>
        </PopoverContent>
      </Portal>
    </ChakraPopover>
  );
}
