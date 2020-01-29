import * as authActions from './auth/action';
import * as userActions from './user/action';

export default {
  ...authActions,
  ...userActions
}
