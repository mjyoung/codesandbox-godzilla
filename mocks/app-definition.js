export default {
  afterResponse: [],
  authentication: {
    connectionLabel: '{{bundle.inputData.userPrincipalName}}',
    fields: [
      {
        choices: {
          business: 'Business - Work or School',
          personal: 'Personal - live.com/outlook.com',
        },
        default: 'personal',
        key: 'accountType',
        label: 'Account Type',
        required: true,
      },
    ],
    oauth2Config: {
      authorizeUrl: '$func$2$f$',
      autoRefresh: true,
      getAccessToken: '$func$2$f$',
      refreshAccessToken: '$func$2$f$',
      scope: 'User.Read Files.ReadWrite.All offline_access',
    },
    test: '$func$1$f$',
    type: 'oauth2',
  },
  beforeRequest: ['$func$3$f$'],
  creates: {
    fileCreate: {
      display: {
        description: 'Upload an existing file or attachment.',
        important: true,
        label: 'Upload File',
      },
      key: 'fileCreate',
      noun: 'File',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to place the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
          {
            helpText:
              'Must be a file object from another service (or some text or URL).',
            key: 'file',
            label: 'File',
            required: true,
            type: 'file',
          },
          {
            helpText:
              'By default, we use the same name and extension as the original file.',
            key: 'name',
            label: 'File Name',
            required: false,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'File Name',
          },
          {
            key: '_path',
            label: 'File Path',
          },
          {
            key: '_parent',
            label: 'Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
          {
            key: '@microsoft.graph.downloadUrl',
            label: 'Download URL',
          },
        ],
        perform: '$func$2$f$',
        performGet: '$func$0$f$',
        resource: 'file',
        sample: {
          '@microsoft.graph.downloadUrl': 'http://example.com',
          _parent: '/Something',
          _path: '/Something/Example.jpg',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example.jpg',
          webUrl: 'http://example.com',
        },
      },
    },
    folderCreate: {
      display: {
        description: 'Creates a new folder.',
        important: true,
        label: 'Create Folder',
      },
      key: 'folderCreate',
      noun: 'Folder',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to create the folder. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
          {
            key: 'name',
            required: true,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Folder Name',
          },
          {
            key: '_path',
            label: 'Folder Path',
          },
          {
            key: '_parent',
            label: 'Parent Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
        ],
        perform: '$func$2$f$',
        performGet: '$func$0$f$',
        resource: 'folder',
        sample: {
          _parent: '/Something',
          _path: '/Something/Example',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example',
          webUrl: 'http://example.com',
        },
      },
    },
    textFile: {
      display: {
        description:
          'Creates a brand new text file from plain text content you specify.',
        important: true,
        label: 'Create New Text File',
      },
      key: 'textFile',
      noun: 'Text File',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to place the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
          {
            helpText: 'Plain text content to put inside the new text file.',
            key: 'file',
            label: 'File',
            required: true,
            type: 'text',
          },
          {
            helpText:
              'Specify the name of this file. ".txt" will always be appended.',
            key: 'name',
            label: 'Name of New File',
            required: true,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'File Name',
          },
          {
            key: '_path',
            label: 'File Path',
          },
          {
            key: '_parent',
            label: 'Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
          {
            key: '@microsoft.graph.downloadUrl',
            label: 'Download URL',
          },
        ],
        perform: '$func$2$f$',
        sample: {
          '@microsoft.graph.downloadUrl': 'http://example.com',
          _parent: '/Something',
          _path: '/Something/Example.jpg',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example.jpg',
          webUrl: 'http://example.com',
        },
      },
    },
  },
  hydrators: {
    getFileContents: '$func$2$f$',
  },
  platformVersion: '2.1.0',
  resources: {
    file: {
      create: {
        display: {
          description: 'Upload an existing file or attachment.',
          important: true,
          label: 'Upload File',
        },
        operation: {
          inputFields: [
            {
              dynamic: 'folderList._path.name',
              helpText:
                'Folder where to place the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
              key: 'folder',
              label: 'Folder',
              required: false,
              type: 'string',
            },
            {
              helpText:
                'Must be a file object from another service (or some text or URL).',
              key: 'file',
              label: 'File',
              required: true,
              type: 'file',
            },
            {
              helpText:
                'By default, we use the same name and extension as the original file.',
              key: 'name',
              label: 'File Name',
              required: false,
              type: 'string',
            },
          ],
          perform: '$func$2$f$',
        },
      },
      get: {
        display: {
          description: 'Gets a file.',
          label: 'Get File',
        },
        operation: {
          inputFields: [
            {
              key: 'id',
              required: true,
            },
          ],
          perform: '$func$0$f$',
        },
      },
      key: 'file',
      list: {
        display: {
          description: 'Triggers when a new file is added in a folder.',
          important: true,
          label: 'New File',
        },
        operation: {
          inputFields: [
            {
              dynamic: 'folderList._path.name',
              helpText:
                'Folder where to look for the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
              key: 'folder',
              label: 'Folder',
              required: false,
              type: 'string',
            },
          ],
          perform: '$func$0$f$',
        },
      },
      noun: 'File',
      outputFields: [
        {
          key: 'id',
          label: 'ID',
        },
        {
          key: 'name',
          label: 'File Name',
        },
        {
          key: '_path',
          label: 'File Path',
        },
        {
          key: '_parent',
          label: 'Folder',
        },
        {
          key: 'webUrl',
          label: 'URL',
        },
        {
          key: '@microsoft.graph.downloadUrl',
          label: 'Download URL',
        },
      ],
      sample: {
        '@microsoft.graph.downloadUrl': 'http://example.com',
        _parent: '/Something',
        _path: '/Something/Example.jpg',
        createdDateTime: '2016-09-16T03:37:04.72Z',
        id: '1',
        lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
        name: 'Example.jpg',
        webUrl: 'http://example.com',
      },
      search: {
        display: {
          description: 'Finds a file by name.',
          important: true,
          label: 'Find File',
        },
        operation: {
          inputFields: [
            {
              dynamic: 'folderList._path.name',
              helpText:
                'Folder where to look for the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
              key: 'folder',
              label: 'Folder',
              required: false,
              type: 'string',
            },
            {
              key: 'name',
              required: true,
              type: 'string',
            },
          ],
          perform: '$func$0$f$',
        },
      },
    },
    folder: {
      create: {
        display: {
          description: 'Creates a new folder.',
          important: true,
          label: 'Create Folder',
        },
        operation: {
          inputFields: [
            {
              dynamic: 'folderList._path.name',
              helpText:
                'Folder where to create the folder. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
              key: 'folder',
              label: 'Folder',
              required: false,
              type: 'string',
            },
            {
              key: 'name',
              required: true,
              type: 'string',
            },
          ],
          perform: '$func$2$f$',
        },
      },
      get: {
        display: {
          description: 'Gets a folder.',
          label: 'Get Folder',
        },
        operation: {
          inputFields: [
            {
              key: 'id',
              required: true,
            },
          ],
          perform: '$func$0$f$',
        },
      },
      key: 'folder',
      list: {
        display: {
          description: 'Triggers when a new folder is added.',
          important: true,
          label: 'New Folder',
        },
        operation: {
          inputFields: [
            {
              dynamic: 'folderList._path.name',
              helpText:
                'Folder where to look for the folder. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
              key: 'folder',
              label: 'Folder',
              required: false,
              type: 'string',
            },
          ],
          perform: '$func$2$f$',
        },
      },
      noun: 'Folder',
      outputFields: [
        {
          key: 'id',
          label: 'ID',
        },
        {
          key: 'name',
          label: 'Folder Name',
        },
        {
          key: '_path',
          label: 'Folder Path',
        },
        {
          key: '_parent',
          label: 'Parent Folder',
        },
        {
          key: 'webUrl',
          label: 'URL',
        },
      ],
      sample: {
        _parent: '/Something',
        _path: '/Something/Example',
        createdDateTime: '2016-09-16T03:37:04.72Z',
        id: '1',
        lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
        name: 'Example',
        webUrl: 'http://example.com',
      },
      search: {
        display: {
          description: 'Finds a folder by name.',
          important: true,
          label: 'Find Folder',
        },
        operation: {
          inputFields: [
            {
              dynamic: 'folderList._path.name',
              helpText:
                'Folder where to look for the folder. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
              key: 'folder',
              label: 'Folder',
              required: false,
              type: 'string',
            },
            {
              key: 'name',
              required: true,
              type: 'string',
            },
          ],
          perform: '$func$0$f$',
        },
      },
    },
  },
  searchOrCreates: {
    fileSearch: {
      create: 'fileCreate',
      display: {
        description: 'Finds a file by name.',
        label: 'Find or Create File',
      },
      key: 'fileSearch',
      search: 'fileSearch',
    },
    folderSearch: {
      create: 'folderCreate',
      display: {
        description: 'Finds a folder by name.',
        label: 'Find or Create Folder',
      },
      key: 'folderSearch',
      search: 'folderSearch',
    },
  },
  searches: {
    fileSearch: {
      display: {
        description: 'Finds a file by name.',
        important: true,
        label: 'Find File',
      },
      key: 'fileSearch',
      noun: 'File',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to look for the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
          {
            key: 'name',
            required: true,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'File Name',
          },
          {
            key: '_path',
            label: 'File Path',
          },
          {
            key: '_parent',
            label: 'Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
          {
            key: '@microsoft.graph.downloadUrl',
            label: 'Download URL',
          },
        ],
        perform: '$func$0$f$',
        performGet: '$func$0$f$',
        resource: 'file',
        sample: {
          '@microsoft.graph.downloadUrl': 'http://example.com',
          _parent: '/Something',
          _path: '/Something/Example.jpg',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example.jpg',
          webUrl: 'http://example.com',
        },
      },
    },
    folderSearch: {
      display: {
        description: 'Finds a folder by name.',
        important: true,
        label: 'Find Folder',
      },
      key: 'folderSearch',
      noun: 'Folder',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to look for the folder. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
          {
            key: 'name',
            required: true,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Folder Name',
          },
          {
            key: '_path',
            label: 'Folder Path',
          },
          {
            key: '_parent',
            label: 'Parent Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
        ],
        perform: '$func$0$f$',
        performGet: '$func$0$f$',
        resource: 'folder',
        sample: {
          _parent: '/Something',
          _path: '/Something/Example',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example',
          webUrl: 'http://example.com',
        },
      },
    },
  },
  triggers: {
    fileList: {
      display: {
        description: 'Triggers when a new file is added in a folder.',
        important: true,
        label: 'New File',
      },
      key: 'fileList',
      noun: 'File',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to look for the file. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'File Name',
          },
          {
            key: '_path',
            label: 'File Path',
          },
          {
            key: '_parent',
            label: 'Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
          {
            key: '@microsoft.graph.downloadUrl',
            label: 'Download URL',
          },
        ],
        perform: '$func$0$f$',
        resource: 'file',
        sample: {
          '@microsoft.graph.downloadUrl': 'http://example.com',
          _parent: '/Something',
          _path: '/Something/Example.jpg',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example.jpg',
          webUrl: 'http://example.com',
        },
        type: 'polling',
      },
    },
    folderList: {
      display: {
        description: 'Triggers when a new folder is added.',
        important: true,
        label: 'New Folder',
      },
      key: 'folderList',
      noun: 'Folder',
      operation: {
        inputFields: [
          {
            dynamic: 'folderList._path.name',
            helpText:
              'Folder where to look for the folder. Keep clicking the dropdown to go inside folders. Defaults to the top-level folder if left blank.',
            key: 'folder',
            label: 'Folder',
            required: false,
            type: 'string',
          },
        ],
        outputFields: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Folder Name',
          },
          {
            key: '_path',
            label: 'Folder Path',
          },
          {
            key: '_parent',
            label: 'Parent Folder',
          },
          {
            key: 'webUrl',
            label: 'URL',
          },
        ],
        perform: '$func$2$f$',
        resource: 'folder',
        sample: {
          _parent: '/Something',
          _path: '/Something/Example',
          createdDateTime: '2016-09-16T03:37:04.72Z',
          id: '1',
          lastModifiedDateTime: '2016-09-16T03:37:04.72Z',
          name: 'Example',
          webUrl: 'http://example.com',
        },
        type: 'polling',
      },
    },
  },
  version: '1.0.0',
};
