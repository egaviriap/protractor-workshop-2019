import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 1000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
