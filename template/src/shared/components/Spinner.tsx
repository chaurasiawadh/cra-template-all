import React, { ReactElement } from 'react';

const Spinner = ({ height }: any): ReactElement => {
  return (
    <div className="fallback-loader" style={{ height: height || '100vh' }}>
      <h1>Loader Icon</h1>
    </div>
  );
};

export default Spinner;
