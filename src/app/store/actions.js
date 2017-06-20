import { APP_TITLE } from './mutations';

export const APP_TITLE_ACTION = 'appTitleAction';

export const appTitleAction = ({ commit }) => {
  setTimeout(() => commit(APP_TITLE, 'App Works!'), 200);
};

export default { appTitleAction };
