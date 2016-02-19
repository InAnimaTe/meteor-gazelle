import { ManageUserClasses } from './components/ManageUserClasses.jsx';

export default (() => {
  Router.private.userClasses = Router.private.group({
    name: 'user-classes'
  });

  Router.private.userClasses.route('/user-classes', {
    name: 'user-classes',
    action (params, queryParams) {
      ReactLayout.render(App, {
        yield: <ManageUserClasses />
      });
    }
  });

})();
