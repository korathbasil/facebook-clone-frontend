import openSocket from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = openSocket("http://localhost:8000");
};

const getSocket = () => {
  if (socket) {
    return socket;
  }
};

export default getSocket;
