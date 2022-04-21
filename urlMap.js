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
  trello: {
    '': 'https://trello.com',
    tasks:
      'https://trello.com/b/taSm3IvQ/devrel-task-board?filter=member:stevenhicksatcamunda',
  },
  confluence: {
    '': 'https://confluence.camunda.com',
  },
  gh: {
    '': 'https://github.com',
    // '*': 'https://github.com/artsy/{0}',
    // '**': 'https://github.com/artsy/{0}/{1}',
    pulls: 'https://github.com/notifications',
    me: {
      '': 'https://github.com/pepopowitz',
      '*': `https://github.com/pepopowitz/{0}`,
      '**': 'https://github.com/pepopowitz/{0}/{1}',
    },
    c8: {
      '': 'https://github.com/camunda-cloud/',
      '*': 'https://github.com/camunda-cloud/{0}',
      '**': 'https://github.com/camunda-cloud/{0}/{1}',
      // this doesn't work!!! figure out why.
      docs: {
        '': 'https://github.com/camunda-cloud/camunda-cloud-documentation',
        '*': 'https://github.com/camunda-cloud/camunda-cloud-documentation/{0}',
      },
    },
  },
};
