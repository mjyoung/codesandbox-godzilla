import React from 'react';

import './FormEditor.scss';

const FormEditor = props => {
  const {
    inputFields,
    onUpdateKey,
    onUpdateLabel,
    onUpdateHelpText,
    onUpdateDropdown,
    onAddField,
  } = props;

  const editorToRender = inputFields.map((field, index) => {
    return (
      <div className="form-editor__item" key={index}>
        <h4>Key</h4>
        <input
          type="text"
          value={field.key}
          onChange={ev => {
            onUpdateKey(index, ev.target.value);
          }}
        />
        <h4>Label</h4>
        <input
          type="text"
          value={field.label}
          onChange={ev => {
            onUpdateLabel(field.key, ev.target.value);
          }}
        />
        <h4>Help Text</h4>
        <input
          type="text"
          value={field.helpText}
          onChange={ev => {
            onUpdateHelpText(field.key, ev.target.value);
          }}
        />
        <h4>Dropdown</h4>
        <input
          type="checkbox"
          checked={Boolean(field.dropdown)}
          onChange={ev => {
            onUpdateDropdown(field.key, ev.target.checked);
          }}
        />
      </div>
    );
  });

  return (
    <div className="form-editor" tabIndex={0}>
      <h3>Form Editor</h3>
      {editorToRender}
      <button onClick={onAddField}>Add a field</button>
    </div>
  );
};

export default FormEditor;
