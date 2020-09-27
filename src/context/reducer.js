export const initialState = {
  user: null,
  token: null,
  isLoading: true,
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
  }
};
