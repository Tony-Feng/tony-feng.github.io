import { combineReducers } from 'redux';
import infoReducer from './info';
import projectReducer from './project';

export default combineReducers(
  {
    info: infoReducer,
    project: projectReducer
  }
);
