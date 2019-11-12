import { Reducer } from 'redux';
import { formatDiff } from '../format-diff';
import { isActionStartTimer, isActionStopTimer, isActionRestartTimer } from './actions';

export interface RootReducerState {
  started: number | null;
  stopped: number | null;
}

const DEFAULT_STATE: RootReducerState = {
  started: null,
  stopped: null,
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionStartTimer(action)) {
    if (isStopwatchUninitialized(state)) {
      return {
        ...state,
        started: action.data.time,
        stopped: null,
      };
    } else {
      return {
        ...state,
        started: action.data.time - (state.stopped! - state.started!),
        stopped: null,
      };
    }
  }

  if (isActionStopTimer(action)) {
    return {
      ...state,
      stopped: action.data.time,
    };
  }

  if (isActionRestartTimer(action)) {
    return {
      ...state,
      started: null,
      stopped: null,
    };
  }

  return state;
};

export default reducer;

export const isStopwatchUninitialized = (state: RootReducerState) => (
  state.stopped === null && state.started !== null
);

export const isStopwatchTicking = (state: RootReducerState) => (
  state.stopped === null && state.started !== null
);

export const isStopwatchPaused = (state: RootReducerState) => (
  state.stopped !== null && state.started !== null
);

export const getStopwatchMilliseconds = (state: RootReducerState, now: number) => (
  state.started === null ?
    0 :
  state.stopped === null ?
    Math.max(0, Math.round(now - state.started)) :
    Math.max(0, Math.round(state.stopped - state.started))
);

export const getStopwatchFormatted = (state: RootReducerState, now: number) => (
  formatDiff(getStopwatchMilliseconds(state, now))
);

export const getStartStopButtonText = (state: RootReducerState) => (
  isStopwatchTicking(state) ? 'Stop' : 'Start'
);
