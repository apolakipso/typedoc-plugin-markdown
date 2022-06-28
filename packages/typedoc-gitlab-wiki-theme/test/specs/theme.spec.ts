import * as fs from 'fs';
import * as path from 'path';
import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

beforeAll(async () => {
  testApp = new TestApp(['theme.ts']);
  await testApp.bootstrap({
    plugin: [path.join(__dirname, '..', '..', 'dist')],
    theme: 'gitlab-wiki',
  });
});
describe(`Theme:`, () => {
  test(`should write sidebar'`, async () => {
    const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_sidebar.md');
    expect(sidebarFile.toString()).toMatchSnapshot();
  });
});
