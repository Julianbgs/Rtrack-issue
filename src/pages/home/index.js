import './index.sass';
import './index.pug';
import initTasks from './tasks';
import initEducation from './education';

export default () => {
  initTasks();
  initEducation();
};
