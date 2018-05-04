/*
 * Everything here is based on the mock app definition. 
 * The assumption is we would:
 * 1. Make an API call to get an app definition from the 
 * backend.
 * 2. Store the app definition in state (reducer).
 * 3. When changes made to UI, persist those to app state and
 * POST to backend API on save.
*/

import React, { Component } from 'react';
import AceEditor from 'react-ace';
import _ from 'lodash';

import 'brace/mode/javascript';
import 'brace/theme/solarized_light';

import appDefinition from '../../mocks/app-definition';
import codeBlock from '../../mocks/code-block';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Sandbox extends Component {
  constructor() {
    super();
    this.state = {
      appDefinition,
      codeBlock,
    };
  }

  addField = () => {
    const newState = _.cloneDeep(this.state.appDefinition);
    newState.triggers[0].inputFields.push({
      key: '',
      label: '',
      helpText: '',
      dropdown: false,
    });
    this.setState({
      appDefinition: newState,
    });
  };

  updateKey = (index, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    newState.triggers[0].inputFields[index].key = val;
    this.setState({
      appDefinition: newState,
    });
  };

  updateLabel = (key, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    const inputFieldIndexToUpdate = _.findIndex(
      newState.triggers[0].inputFields,
      inputField => inputField.key === key,
    );
    newState.triggers[0].inputFields[inputFieldIndexToUpdate].label = val;
    this.setState({
      appDefinition: newState,
    });
  };

  updateHelpText = (key, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    const inputFieldIndexToUpdate = _.findIndex(
      newState.triggers[0].inputFields,
      inputField => inputField.key === key,
    );
    newState.triggers[0].inputFields[inputFieldIndexToUpdate].helpText = val;
    this.setState({
      appDefinition: newState,
    });
  };

  updateDropdown = (key, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    const inputFieldIndexToUpdate = _.findIndex(
      newState.triggers[0].inputFields,
      inputField => inputField.key === key,
    );
    newState.triggers[0].inputFields[inputFieldIndexToUpdate].dropdown = val;
    this.setState({
      appDefinition: newState,
    });
  };

  renderTrigger = trigger => {
    const { inputFields } = trigger;
    const editorToRender = inputFields.map((field, index) => {
      return (
        <div style={{ margin: '20px' }} key={index}>
          <h4>Key</h4>
          <input
            type="text"
            value={field.key}
            onChange={ev => {
              this.updateKey(index, ev.target.value);
            }}
          />
          <h4>Label</h4>
          <input
            type="text"
            value={field.label}
            onChange={ev => {
              this.updateLabel(field.key, ev.target.value);
            }}
          />
          <h4>Help Text</h4>
          <input
            type="text"
            value={field.helpText}
            onChange={ev => {
              this.updateHelpText(field.key, ev.target.value);
            }}
          />
          <h4>Dropdown</h4>
          <input
            type="checkbox"
            checked={Boolean(field.dropdown)}
            onChange={ev => {
              this.updateDropdown(field.key, ev.target.checked);
            }}
          />
        </div>
      );
    });
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
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <h2>Edit</h2>
          {editorToRender}
          <button onClick={this.addField}>Add a field</button>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Preview</h2>
          {previewToRender}
          <h2>Definition</h2>
          <pre style={{ textAlign: 'left' }}>
            {JSON.stringify(
              this.state.appDefinition.triggers[0].inputFields,
              undefined,
              2,
            )}
          </pre>
        </div>
      </div>
    );
  };

  render() {
    const { state: { appDefinition: { triggers } } } = this;
    return (
      <div style={styles}>
        <h1>Code Block Example</h1>
        <AceEditor
          mode="javascript"
          theme="solarized_light"
          value={codeBlock}
          onChange={text => {
            console.log('onChange', text);
          }}
          name="code-block"
          editorProps={{ $blockScrolling: true }}
        />

        <h1>List of Triggers</h1>
        {triggers.map(trigger => {
          return (
            <div key={trigger.key} style={{ margin: '20px' }}>
              <h3>{trigger.label}</h3>
            </div>
          );
        })}

        <h1>Live Preview Example (New Recipe Trigger)</h1>
        {this.renderTrigger(triggers[0])}
      </div>
    );
  }
}

export default Sandbox;
