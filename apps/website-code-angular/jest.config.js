module.exports = {
  name: 'website-code-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/website-code-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
