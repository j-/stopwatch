import { useSelector as useSelectorRedux, TypedUseSelectorHook } from 'react-redux';
import { RootReducerState } from '.';

export const useSelector: TypedUseSelectorHook<RootReducerState> = useSelectorRedux;
