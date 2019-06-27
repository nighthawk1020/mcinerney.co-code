module.exports = {
  name: 'crowd-dj',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/crowd-dj',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
