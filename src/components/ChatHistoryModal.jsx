import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, List, ListItem } from "@chakra-ui/react";

const ChatHistoryModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search Saved Chats</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Search for chats..." mb="4" />
          <List spacing={3}>{}</List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChatHistoryModal;
