export const initialState = {
  user: null,
  selectedUser: null,
  token: null,
  isLoading: true,
  chatBoxOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        token: action.user.token,
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
  }
};
