import { Box, VStack, HStack, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from "@chakra-ui/react";
import { FaMicrophone, FaRobot, FaArchive, FaPlusCircle } from "react-icons/fa";
import { useState, useRef } from "react";
import ChatHistoryModal from "../components/ChatHistoryModal";

const Index = () => {
  const avatarInputRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState("");
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

  const [searchTerm, setSearchTerm] = useState("");
  const [isChatHistoryModalOpen, setChatHistoryModalOpen] = useState(false);
  const mockSavedChats = ["Chat_2024-03-10_12-00-00.txt", "Chat_2024-03-10_14-00-00.txt", "Chat_2024-03-10_16-00-00.txt"];
  const filteredChats = searchTerm ? mockSavedChats.filter((chat) => chat.toLowerCase().includes(searchTerm.toLowerCase())) : mockSavedChats;

  const handleOpenHistory = () => {
    setChatHistoryModalOpen(true);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
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
          <Box w="100%" h="90%" bg="gray.50" p="3" overflowY="auto">
            {}
            {avatarUrl && <img src={avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
          </Box>
          <HStack w="100%" justifyContent="space-between">
            <input type="file" ref={avatarInputRef} style={{ display: "none" }} accept="image/*" onChange={handleAvatarChange} />
            <Button w="32%" onClick={() => avatarInputRef.current.click()}>
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
      <ChatHistoryModal isOpen={isChatHistoryModalOpen} onClose={() => setChatHistoryModalOpen(false)} chatHistoryList={filteredChats} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </VStack>
  );
};

export default Index;
