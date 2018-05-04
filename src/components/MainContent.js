import React, { Component } from 'react';
import _ from 'lodash';

import FormEditor from './FormEditor';
import Preview from './Preview';
import appDefinition from '../../mocks/app-definition.js';

import './MainContent.scss';

const TRIGGER_KEY_TO_EDIT = 'fileList';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      appDefinition,
    };
  }

  addField = () => {
    const newState = _.cloneDeep(this.state.appDefinition);
    newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields.push({
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
    newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields[
      index
    ].key = val;
    this.setState({
      appDefinition: newState,
    });
  };

  updateLabel = (key, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    const inputFieldIndexToUpdate = _.findIndex(
      newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields,
      inputField => inputField.key === key,
    );
    newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields[
      inputFieldIndexToUpdate
    ].label = val;
    this.setState({
      appDefinition: newState,
    });
  };

  updateHelpText = (key, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    const inputFieldIndexToUpdate = _.findIndex(
      newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields,
      inputField => inputField.key === key,
    );
    newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields[
      inputFieldIndexToUpdate
    ].helpText = val;
    this.setState({
      appDefinition: newState,
    });
  };

  updateDropdown = (key, val) => {
    const newState = _.cloneDeep(this.state.appDefinition);
    const inputFieldIndexToUpdate = _.findIndex(
      newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields,
      inputField => inputField.key === key,
    );
    newState.triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields[
      inputFieldIndexToUpdate
    ].dropdown = val;
    this.setState({
      appDefinition: newState,
    });
  };

  renderTrigger = trigger => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <h2>Edit</h2>
          <button onClick={this.addField}>Add a field</button>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Preview</h2>
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
    const triggerInputFieldsToEdit =
      triggers[TRIGGER_KEY_TO_EDIT].operation.inputFields;
    return (
      <div className="main">
        <div className="main__header">New Issue Trigger</div>
        <div className="main__wrapper">
          <FormEditor
            inputFields={triggerInputFieldsToEdit}
            onUpdateKey={this.updateKey}
            onUpdateLabel={this.updateLabel}
            onUpdateHelpText={this.updateHelpText}
            onUpdateDropdown={this.updateDropdown}
            onAddField={this.addField}
          />
          <Preview inputFields={triggerInputFieldsToEdit} />
        </div>
      </div>
    );
  }
}

export default MainContent;
