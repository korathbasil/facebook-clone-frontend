import openSocket from "socket.io-client";

let socket;

export const initSocket = async () => {
  socket = await openSocket("http://localhost:8000");
  console.log(socket);
};

const getSocket = () => {
  if (socket != null) {
    return socket;
  }
};

export default getSocket;
