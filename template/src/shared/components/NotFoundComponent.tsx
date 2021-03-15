import { ReactElement } from 'react';
import { checkIsSSo } from 'src/utils/utility';
import Spinner from './Spinner';

const NotFoundComponent = (): ReactElement => {
  return (
    <div>
      {checkIsSSo() ? <Spinner /> : <span>Ooops..! Route doesn't match any component. We are on it, stay safe.!!</span>}
    </div>
  );
};

export default NotFoundComponent;
