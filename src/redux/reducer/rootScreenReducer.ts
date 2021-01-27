enum ActionsEnum {
  ADD_MESSAGE = 'ADD_MESSAGE',
  REMOVE_MESSAGE = 'REMOVE_MESSAGE',
}

export const RootScreenDispatcher = {
  addMessage(message: string) {
    return {
      type: ActionsEnum.ADD_MESSAGE,
      message,
    };
  },

  removeMessage() {
    return {
      type: ActionsEnum.REMOVE_MESSAGE,
      message: '',
    };
  },
};

const initialState = {
  message: 'Hello redux world',
} as {
  message: string
};

type ActionType = {
  type: ActionsEnum,
  message: string,
};

export type RootScreenReduxState = typeof initialState;

export function rootScreenReducer(state = initialState, action: ActionType): RootScreenReduxState {
  switch (action.type) {
    case ActionsEnum.ADD_MESSAGE: {
      const nextState: Partial<RootScreenReduxState> = {
        message: action.message,
      };
      return { ...state, ...nextState };
    }

    case ActionsEnum.REMOVE_MESSAGE: {
      const nextState: Partial<RootScreenReduxState> = {
        message: '',
      };
      return { ...state, ...nextState };
    }

    default: {
      return { ...state };
    }
  }
}
