import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchReducer, {setSearchCategoryAction} from "./searchDuck"

let rootReducer = combineReducers({
    search: searchReducer,
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    store.dispatch(setSearchCategoryAction(""))
    return store;
}

export type RootState = ReturnType<typeof rootReducer>