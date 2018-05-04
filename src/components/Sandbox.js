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
import codeBlock from '../../mocks/code-block';

import 'brace/mode/javascript';
import 'brace/theme/solarized_light';

class Sandbox extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Sandbox;
