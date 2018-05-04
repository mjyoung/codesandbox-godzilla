import React from 'react';

import './Preview.scss';

const Preview = props => {
  const { inputFields } = props;

  const previewToRender = inputFields.map((field, index) => {
    return (
      <div style={{ margin: '20px' }} key={index}>
        <h3>{field.label}</h3>
        <div>{field.helpText}</div>
        {!field.dropdown && <input type="text" />}
        {field.dropdown && (
          <select style={{ width: '200px' }}>
            <option />
          </select>
        )}
      </div>
    );
  });

  const definition = (
    <div>
      <h2>Definition</h2>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(inputFields, undefined, 2)}
      </pre>
    </div>
  );

  return (
    <div className="preview">
      {previewToRender}
      {definition}
    </div>
  );
};

export default Preview;
