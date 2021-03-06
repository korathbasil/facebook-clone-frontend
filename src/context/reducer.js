export const initialState = {
  user: null,
  posts: [],
  friends: [],
  chats: [],
  selectedChat: null,
  selectedUser: null,
  token: null,
  isLoading: true,
  chatBoxOpen: false,
  imageUploadModal: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        token: action.token,
        chats: action.chats,
      };
    case "LOGOUT_USER":
      return {
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
        isLoading: action.isLoading,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    case "SET_CHATS":
      return {
        ...state,
        chats: action.chats,
      };
    case "SET_SELECTED_CHAT":
      return {
        ...state,
        selectedChat: action.chat,
      };
    case "SET_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.user,
      };
    case "SET_CHAT_BOX_OPEN":
      return {
        ...state,
        chatBoxOpen: action.open,
      };
    case "SET_IMAGE_UPLOAD_MODAL":
      return {
        ...state,
        imageUploadModal: action.modal,
      };
  }
};
