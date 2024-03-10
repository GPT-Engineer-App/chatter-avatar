import { Box, VStack, HStack, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Textarea } from "@chakra-ui/react";
import { FaMicrophone, FaRobot, FaArchive, FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chatHistory, setChatHistory] = useState("");

  const handleSendMessage = () => {
    // TODO: Implement chat message sending logic here
    console.log("Message sent");
  };

  const handleSaveChat = () => {
    // TODO: Implement chat saving logic here
    console.log("Chat saved");
  };

  const handleOpenHistory = () => {
    // TODO: Implement chat history retrieval logic here
    onOpen();
  };

  return (
    <VStack spacing="1%" w="100%" h="100vh" p="1%" bg="gray.100">
      <HStack spacing="1%" w="100%" h="95%">
        {/* Window #1 (Chat Interface) */}
        <VStack w="57%" h="100%" p="3" bg="white" spacing="3" justifyContent="space-between">
          <Box w="100%" h="90%" bg="gray.50" p="3" overflowY="auto">
            {/* Chat history display */}
            {chatHistory}
          </Box>
          <HStack w="100%">
            <Input placeholder="Type your message here..." flex="1" />
            <Button onClick={handleSendMessage}>Send</Button>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Button w="49%" onClick={handleSaveChat}>
              New Chat
            </Button>
            <Button w="49%" onClick={handleOpenHistory}>
              History
            </Button>
          </HStack>
        </VStack>

        {/* Window #2 (Avatar Display) */}
        <VStack w="42%" h="100%" p="3" bg="white" spacing="3">
          <Box w="100%" h="90%" bg="gray.50" p="3">
            {/* Avatar display area */}
          </Box>
          <HStack w="100%" justifyContent="space-between">
            <Button w="32%">
              <FaRobot />
            </Button>
            <Button w="32%">
              <FaMicrophone />
            </Button>
            <Button w="32%">
              <FaPlusCircle />
            </Button>
          </HStack>
        </VStack>
      </HStack>

      {/* Chat History Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* Chat history list */}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Index;
