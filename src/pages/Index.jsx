import { Box, VStack, HStack, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast, Text } from "@chakra-ui/react";
import { FaMicrophone, FaRobot, FaArchive, FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chatHistory, setChatHistory] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() !== "") {
      setChatHistory((prevHistory) => `${prevHistory}\n${currentMessage}`);
      setCurrentMessage("");
    }
  };

  const toast = useToast();

  const handleSaveChat = () => {
    const isConfirmed = window.confirm("Do you want to save the current chat?");
    if (isConfirmed) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const filename = `Chat_${timestamp}.txt`;

      console.log(`Saving chat to ${filename}`);
      console.log(chatHistory);

      setChatHistory("");

      toast({
        title: "Chat saved.",
        description: `Your chat has been saved as ${filename}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
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
            {}
            <pre>{chatHistory}</pre>
          </Box>
          <HStack w="100%">
            <Input
              placeholder="Type your message here..."
              flex="1"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(e);
                }
              }}
            />
            <Button onClick={(e) => handleSendMessage(e)}>Send</Button>
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
          <ModalBody>
            <Input placeholder="Search saved chats..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {}
            <Box mt="4">{searchQuery === "" ? <Text>Type above to search saved chats</Text> : <Text>Search results for "{searchQuery}"</Text>}</Box>
          </ModalBody>
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
