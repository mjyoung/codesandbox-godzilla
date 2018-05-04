import React from 'react';

import './Preview.scss';

const Preview = props => {
  const { inputFields } = props;

  const previewToRender = inputFields.map((field, index) => {
    return (
      <div className="preview__item" key={index}>
        <h3>{field.label}</h3>
        <div className="preview__help-text">{field.helpText}</div>
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
      <h3 style={{ textAlign: 'center' }}>Preview</h3>
      {previewToRender}
      {definition}
    </div>
  );
};

export default Preview;
