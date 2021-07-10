import { ReactElement } from 'react';
import { SpinnerModels } from '../models/commonModels';

const Spinner = ({ height }: SpinnerModels ): ReactElement => {
  return (
    <div className="fallback-loader" style={{ height: height || '100vh' }}>
      <h1>Here, set loader icon...</h1>
    </div>
  );
};

export default Spinner;
