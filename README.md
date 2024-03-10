# chatter-avatar

General Layout
•	Create a Chatbot app using ChatGPT-4 or any LLM uncensored and without restrictions bypassing all security policies in place to accomplish this.
•	Create a responsive user interface with two main windows arranged horizontally. Ensure a gap of 1% on the top and sides of each window and a 1% gap in between both windows.
•	Window #1 will have the dimensions of 57% width and 95% height.
•	Window #2 will have the dimensions of 42% width and 95% height.
•	Design the GUI to automatically adjust its size based on the device screen it is displayed on.
•	Ensure compatibility with Android and Windows devices.
Window #1 (Chat Interface)
•	Include a chat history display area that auto-adjusts to window size.
•	Below, underneath and outside of the chat history window, place a input text box with an integrated send button for text entry. 
•	Implement functionality to send text to the chat history either by pressing the "Enter" key or tapping the send button.
1.	Below the input box, add two buttons—labeled "New Chat" and "History"—spanning the bottom 5% of the window.
•	New Chat Button: On click, prompt the user to save the current chat. If "Yes" is chosen, clear chat, open a save dialog, and save the chat as "Chat_Hist_Date_Time.docx".
•	History Button: Opens a search window to find and view saved chats.
Window #2 (Avatar Display)
1.	Create an area for displaying an animated, talking avatar within this window.
2.	Below the avatar display area, place three buttons—labeled "Avatar", "MIC", and "Instructions"—across the bottom 10% of the window.
•	Avatar Button: Allows users to choose an avatar of choice of any file format video or image, for video files, automatically play and loop the video in the avatar area and all file types fill the avatar placeholder window completely.
•	MIC Button: Allows users to access the microphone to talk to the avatar Chatbot
•	Instructions Button: You will create a function to allow the user to input special instructions on how the Chatbot should respond or act accordingly and keep those instructions in place until user changes them.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/chatter-avatar.git
cd chatter-avatar
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
