import { Dispatch } from 'redux';
 
export function handleBlur(state: boolean, toggleState: (payload: any) => any, dispatch: Dispatch<any>) {
    dispatch(toggleState(false));
}