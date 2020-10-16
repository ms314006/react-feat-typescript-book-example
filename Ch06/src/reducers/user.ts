 interface UserState {
  name: string,
  user: any,
};

const initialState: UserState = {
  name: '神 Q 超人', 
  user: {},
};
 
const user = (state = initialState, action): UserState => {
  switch (action.type) { 
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
 
export default user;
