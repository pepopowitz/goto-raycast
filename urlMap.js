// wildcards: {
//   '': "matches on 'goto wildcards'",
//   '*': "matches on 'goto wildcards unmatched'",
//   '**': "matches on 'goto wildcards unmatched otherArg'",
// }

exports.urlMap = {
  prod: {
    '': 'https://docs.camunda.io/',
  },
  staging: {
    '': 'https://stage.docs.camunda.io/',
  },
  tasks:
    'https://trello.com/b/taSm3IvQ/devrel-task-board?filter=member:stevenhicksatcamunda',
  trello: {
    '': 'https://trello.com',
    tasks:
      'https://trello.com/b/taSm3IvQ/devrel-task-board?filter=member:stevenhicksatcamunda',
  },
  confluence: {
    '': 'https://confluence.camunda.com',
  },
  okta: 'https://camunda.okta.com/app/UserHome',
  gcp: 'https://console.cloud.google.com',
  c7: {
    prod: 'https://docs.camunda.org',
    staging: 'https://stage.docs.camunda.org',
  },
  c8: {
    prod: 'https://docs.camunda.io',
    staging: 'https://stage.docs.camunda.io',
  },
  gh: {
    '': 'https://github.com',
    '*': 'https://github.com/camunda/{0}',
    '**': 'https://github.com/camunda/{0}/{1}',
    board: 'https://github.com/orgs/camunda/projects/27',
    hub: 'https://github.com/orgs/camunda/projects/9/views/25',
    pulls: 'https://github.com/notifications',
    me: {
      '': 'https://github.com/pepopowitz',
      '*': `https://github.com/pepopowitz/{0}`,
      '**': 'https://github.com/pepopowitz/{0}/{1}',
    },
    docs: {
      '': 'https://github.com/camunda/camunda-platform-docs',
      '*': 'https://github.com/camunda/camunda-platform-docs/{0}',
      board: 'https://github.com/orgs/camunda/projects/27',
    },
    c7docs: {
      '': 'https://github.com/camunda/camunda-docs-manual',
      '*': 'https://github.com/camunda/camunda-docs-manual/{0}',
      theme: 'https://github.com/camunda/camunda-docs-theme',
    },
    cloud: {
      '': 'https://github.com/camunda-cloud/',
      '*': 'https://github.com/camunda-cloud/{0}',
      '**': 'https://github.com/camunda-cloud/{0}/{1}',
    },
  },
};
