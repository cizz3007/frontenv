import {createSelector} from 'reselect';

export const modalOpenSelect = (state) => state.modalReducer.open;
export const modalTitleSelect = (state) => state.modalReducer.title;
export const modalDescriptionSelect = (state) => state.modalReducer.description;
export const modalConfirmActionSelect = (state) => state.modalReducer.onConfirm;
