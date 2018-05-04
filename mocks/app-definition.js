export default {
  title: 'Sample App',
  description: 'A really cool example app.',
  image:
    'https://cdn.zapier.com/storage/developer/57b336375384ab62cc06e7e83d5c3622_2.128x128.png',
  repo: 'sample-app',
  version: '1.0.0',
  authentication: {
    type: 'apiToken',
    url: 'https://example.com/recipe',
    method: 'GET',
    headers: {
      'X-API-Token': '{{authData.apiToken}}',
    },
    inputFields: [
      {
        key: 'apiToken',
        label: 'API Token',
        type: 'string',
        required: true,
        helpText:
          'Your API Token can be found in [https://example.com/settings](your settings).',
      },
    ],
  },
  dropdowns: [
    {
      key: 'cuisine',
      url: 'https://example.com/cuisine',
      method: 'GET',
      headers: {
        'X-API-Token': '{{authData.apiToken}}',
      },
      sample: {
        id: 1,
        name: 'Italian',
      },
    },
  ],
  triggers: [
    {
      key: 'recipe',
      type: 'polling',
      label: 'New Recipe',
      noun: 'Recipe',
      description: 'Triggers on a new recipe.',
      url: 'https://example.com/recipe',
      method: 'GET',
      params: [
        {
          key: 'cuisine',
          value: '{{inputData.cuisine}}',
          sendWhenEmpty: false,
        },
      ],
      headers: {
        'X-API-Token': '{{authData.apiToken}}',
      },
      inputFields: [
        {
          key: 'cuisine',
          label: 'Cuisine',
          type: 'number',
          required: false,
          dropdown: 'cuisine.id.name',
          helpText: 'Type of cuisine to trigger on.',
        },
        {
          key: 'cookingTime',
          label: 'Cooking Time',
          required: false,
          helpText: 'Trigger on cook time.',
        },
      ],
      sample: {
        id: 1,
        name: 'Spaghetti',
        custom_123: 'Boil water. Add pasta.',
        custom_321: '10-15 minutes.',
      },
      outputFields: [
        {
          key: 'custom_123',
          label: 'Directions',
          type: 'string',
        },
        {
          // Would get label for custom_321
          type: 'request',
          url: 'https://example.com/recipe-output-fields',
          method: 'GET',
          headers: {
            'X-API-Token': '{{authData.apiToken}}',
          },
        },
      ],
      important: true,
      paging: false,
      hidden: false,
    },
    {
      key: 'rating',
      type: 'hook',
      label: 'New Rating',
      noun: 'Rating',
      description: 'Triggers on a new recipe rating.',
      subscribe: {
        url: 'https://example.com/rating-hooks',
        method: 'POST',
        body: {
          event: 'new',
        },
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
      },
      unsubscribe: {
        url: 'https://example.com/rating-hooks/{{inputData.hook.id}}',
        method: 'DELETE',
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
      },
      url: 'https://example.com/rating',
      method: 'GET',
      headers: {
        'X-API-Token': '{{authData.apiToken}}',
      },
      sample: {
        id: 1,
        recipe: 1,
        rating: 5,
      },
      important: true,
      // "paging": false, // We wouldn't need this here because the polling is only for test data
      hidden: false,
    },
  ],
  creates: [
    {
      key: 'recipe',
      label: 'Create Recipe',
      noun: 'Recipe',
      description: 'Creates a new recipe.',
      url: 'https://example.com/recipe',
      method: 'POST',
      headers: {
        'X-API-Token': '{{authData.apiToken}}',
      },
      inputFields: [
        {
          key: 'cuisine',
          label: 'Cuisine',
          type: 'number',
          required: true,
          dropdown: 'cuisine.id.name',
        },
        {
          key: 'name',
          label: 'Name',
          type: 'string',
          required: true,
        },
        {
          key: 'custom_123',
          label: 'Directions',
          type: 'string',
          required: true,
        },
        {
          // Would get custom_321
          type: 'request',
          url: 'https://example.com/recipe-input-fields',
          method: 'GET',
          headers: {
            'X-API-Token': '{{authData.apiToken}}',
          },
        },
      ],
      sample: {
        id: 1,
        name: 'Spaghetti',
        custom_123: 'Boil water. Add pasta.',
        custom_321: '10-15 minutes.',
      },
      outputFields: [
        {
          key: 'custom_123',
          label: 'Directions',
          type: 'string',
        },
        {
          // Would get label for custom_321
          type: 'request',
          url: 'https://example.com/recipe-output-fields',
          method: 'GET',
          headers: {
            'X-API-Token': '{{authData.apiToken}}',
          },
        },
      ],
      sendAsForm: false,
      important: true,
      hidden: false,
    },
    {
      key: 'rating',
      label: 'Create Rating',
      noun: 'Rating',
      description: 'Creates a new rating for a recipe.',
      url: 'https://example.com/rating',
      method: 'POST',
      params: [
        {
          key: 'format',
          value: 'form',
          sendWhenEmpty: true,
        },
      ],
      headers: {
        'X-API-Token': '{{authData.apiToken}}',
      },
      inputFields: [
        {
          key: 'recipe',
          label: 'Recipe',
          type: 'number',
          required: true,
          dropdown: 'recipe.id.name',
          search: 'recipe.id',
        },
        {
          key: 'rating',
          label: 'Rating',
          type: 'number',
          required: true,
          dropdown: [
            {
              label: '1',
              value: 1,
            },
            {
              label: '2',
              value: 2,
            },
            {
              label: '3',
              value: 3,
            },
            {
              label: '4',
              value: 4,
            },
            {
              label: '5',
              value: 5,
            },
          ],
        },
      ],
      sample: {
        id: 1,
        recipe: 1,
        rating: 5,
      },
      sendAsForm: true,
      important: true,
      hidden: false,
    },
  ],
  searches: [
    {
      key: 'recipe',
      label: 'Find Recipe',
      noun: 'Recipe',
      description: 'Finds a recipe.',
      url: 'https://example.com/recipe/search',
      method: 'GET',
      params: [
        {
          key: 'name',
          value: '{{inputData.name}}',
          sendWhenEmpty: false,
        },
        {
          key: 'cuisine',
          value: '{{inputData.cuisine}}',
          sendWhenEmpty: false,
        },
      ],
      headers: {
        'X-API-Token': '{{authData.apiToken}}',
      },
      inputFields: [
        {
          key: 'cuisine',
          label: 'Cuisine',
          type: 'number',
          required: false,
          dropdown: 'cuisine.id.name',
        },
        {
          key: 'name',
          label: 'Name',
          type: 'string',
          required: false,
        },
      ],
      sample: {
        id: 1,
        name: 'Spaghetti',
        custom_123: 'Boil water. Add pasta.',
        custom_321: '10-15 minutes.',
      },
      outputFields: [
        {
          key: 'custom_123',
          label: 'Directions',
          type: 'string',
        },
        {
          // Would get label for custom_321
          type: 'request',
          url: 'https://example.com/recipe-output-fields',
          method: 'GET',
          headers: {
            'X-API-Token': '{{authData.apiToken}}',
          },
        },
      ],
      important: true,
      hidden: false,
    },
  ],
  searchOrCreates: [
    {
      key: 'recipe',
      label: 'Find or Create Recipe',
      noun: 'Recipe',
      // "description": "Finds a recipe. Alternatively, create one if not found.", // We automatically populate these, but shouldn't we allow a customized message?
      search: 'recipe',
      create: 'recipe',
      resource: {
        url: 'https://example.com/recipe/{{inputData.id}}',
        method: 'GET',
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
      },
      // "important": false, // We ignore these here and use the search.important instead
      hidden: false,
    },
  ],
  resources: [
    {
      key: 'cook',
      noun: 'Cook',
      get: {
        url: 'https://example.com/cook/{{inputData.id}}',
        method: 'GET',
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
        inputFields: [
          {
            key: 'id',
            label: 'ID',
            type: 'number',
            required: true,
          },
        ],
      },
      list: {
        type: 'polling',
        label: 'New Cook',
        description: 'Triggers on a new cook.',
        url: 'https://example.com/cook',
        method: 'GET',
        params: [
          {
            key: 'cuisine',
            value: '{{inputData.cuisine}}',
            sendWhenEmpty: false,
          },
        ],
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
        inputFields: [
          {
            key: 'cuisine',
            label: 'Cuisine',
            type: 'number',
            required: false,
            dropdown: 'cuisine.id.name',
            helpText: "Type of cook's cuisine to trigger on.",
          },
        ],
      },
      create: {
        label: 'Create Cook',
        description: 'Creates a new cook.',
        url: 'https://example.com/cook',
        method: 'POST',
        body: {
          cook: {
            cuisine: '{{inputData.cuisine}}',
            name: '{{inputData.name}}',
          },
        },
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
        inputFields: [
          {
            key: 'cuisine',
            label: 'Cuisine',
            type: 'number',
            required: true,
            dropdown: 'cuisine.id.name',
          },
          {
            key: 'name',
            label: 'Name',
            type: 'string',
            required: true,
          },
        ],
        sendAsForm: false,
      },
      search: {
        label: 'Find Cook',
        description: 'Finds a cook.',
        url: 'https://example.com/cook/search',
        method: 'GET',
        params: [
          {
            key: 'name',
            value: '{{inputData.name}}',
            sendWhenEmpty: false,
          },
          {
            key: 'cuisine',
            value: '{{inputData.cuisine}}',
            sendWhenEmpty: false,
          },
        ],
        headers: {
          'X-API-Token': '{{authData.apiToken}}',
        },
        inputFields: [
          {
            key: 'cuisine',
            label: 'Cuisine',
            type: 'number',
            required: false,
            dropdown: 'cuisine.id.name',
          },
          {
            key: 'name',
            label: 'Name',
            type: 'string',
            required: false,
          },
        ],
      },
      sample: {
        id: 1,
        name: 'Giovanno Staropi',
        cuisine: 1,
        rating: 5,
      },
      outputFields: [
        {
          key: 'rating',
          label: 'Average Rating',
          type: 'number',
        },
      ],
    },
  ],
};
