import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootReducerState, isStopwatchTicking } from '.';

/* Start timer */

export const ACTION_START_TIMER = 'START_TIMER';

export interface ActionStartTimer extends Action<typeof ACTION_START_TIMER> {
  data: {
    time: number;
  };
}

export const isActionStartTimer = (action: Action): action is ActionStartTimer => (
  action.type === ACTION_START_TIMER
);

export const startTimer = (time: number = Date.now()): ActionStartTimer => ({
  type: ACTION_START_TIMER,
  data: {
    time,
  },
});

/* Stop timer */

export const ACTION_STOP_TIMER = 'STOP_TIMER';

export interface ActionStopTimer extends Action<typeof ACTION_STOP_TIMER> {
  data: {
    time: number;
  };
}

export const isActionStopTimer = (action: Action): action is ActionStopTimer => (
  action.type === ACTION_STOP_TIMER
);

export const stopTimer = (time: number = Date.now()): ActionStopTimer => ({
  type: ACTION_STOP_TIMER,
  data: {
    time,
  },
});

/* Toggle timer */

export const toggleTimer = (time: number = Date.now()): ThunkAction<void, RootReducerState, void, ActionStartTimer | ActionStopTimer> => (dispatch, getState) => {
  const state = getState();
  const isTicking = isStopwatchTicking(state);
  if (isTicking) {
    dispatch(stopTimer(time));
  } else {
    dispatch(startTimer(time));
  }
};

/* Restart timer */

export const ACTION_RESTART_TIMER = 'RESTART_TIMER';

export interface ActionRestartTimer extends Action<typeof ACTION_RESTART_TIMER> {}

export const isActionRestartTimer = (action: Action): action is ActionRestartTimer => (
  action.type === ACTION_RESTART_TIMER
);

export const restartTimer = (): ActionRestartTimer => ({
  type: ACTION_RESTART_TIMER,
});
