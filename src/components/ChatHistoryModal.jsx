import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, List, ListItem } from "@chakra-ui/react";

const ChatHistoryModal = ({ isOpen, onClose, chatHistoryList, searchTerm, onSearchChange }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search Saved Chats</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Search for chats..." mb="4" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
          <List spacing={3}>
            {chatHistoryList.map((chat, index) => (
              <ListItem key={index}>{chat}</ListItem>
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChatHistoryModal;
