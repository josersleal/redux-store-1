import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{
    label: 'Eat pizza',
    complete: false
  }]
};

export function reducers(state = initialState, action: { type: string, payload: any }) {
  // ...state create immutable state object
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };
    }
    case fromActions.REMOVE_TODO: {
      const todo = action.payload;
      const data = state.data.filter(d => d.label !== todo.label);
      return {
        ...state,
        data
      };
    }
  }
  return state;
}
