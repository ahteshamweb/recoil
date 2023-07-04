import {createStore,applyMiddleware,combineReducers} from 'redux'
import userReducer from './reducers/userReducer'
import studentReducer from './reducers/studentReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


import createSagaMiddleware from 'redux-saga'
import rootSaga from '../rootSaga'
const sagaMiddleware = createSagaMiddleware();


const mainReducer = combineReducers({
  user:userReducer,
  student:studentReducer 
}) 
 
const  commonData = { 
  user:{
    userId:'UI9898',
    name:'Ram Singhssssss', 
    department:['IT','TECH']
  },
  student:{
    studentId:'CSS117',
    name:'Ramesh Singh',
    email:'mahesh@gmail.com',
    marks:80,
    age:20,
    subject:['Math','English']
  }
}

//const store  = createStore(mainReducer,commonData,composeWithDevTools(applyMiddleware(thunk)))

const store  = createStore(mainReducer,commonData,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store

