import {autoWired, resource} from '~/common/spring';

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

@resource('user')
class UserModel {
  name = 'lichun';
}
export default UserModel;
