// create store
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import authToken from '../utility/authToken';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

let currentState = store.getState();

store.subscribe(() => {
  const previousState = currentState;
  currentState = store.getState();
  if (previousState.authReducer.token !== currentState.authReducer.token) {
    const { token } = currentState.authReducer;
    const { role } = currentState.authReducer;
    authToken(token, role);
  }
});

export default store;
