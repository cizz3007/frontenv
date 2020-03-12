import {createSelector} from 'reselect';

const userLanguageSelect = state => state.userReducer.language;

export const LANGUAGE_TEXT_RESELECTOR = createSelector(
    [userLanguageSelect],
    (lang) => {
        return require(`../languages/${lang}/index`);
    })

