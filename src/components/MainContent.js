import React, { Component } from 'react';
import _ from 'lodash';

import FormEditor from './FormEditor';
import Preview from './Preview';
import appDefinition from '../../mocks/app-definition';

import './MainContent.scss';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      appDefinition,
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
    return (
      <div className="main">
        <div className="main__header">New Issue Trigger</div>
        <div className="main__wrapper">
          <FormEditor
            inputFields={triggers[0].inputFields}
            onUpdateKey={this.updateKey}
            onUpdateLabel={this.updateLabel}
            onUpdateHelpText={this.updateHelpText}
            onUpdateDropdown={this.updateDropdown}
          />
          <Preview inputFields={triggers[0].inputFields} />
        </div>
      </div>
    );
  }

  renderOld() {
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

export default MainContent;
