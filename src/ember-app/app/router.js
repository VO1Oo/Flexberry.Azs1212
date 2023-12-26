import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-azs1212-азс-l');
  this.route('i-i-s-azs1212-азс-e',
  { path: 'i-i-s-azs1212-азс-e/:id' });
  this.route('i-i-s-azs1212-азс-e.new',
  { path: 'i-i-s-azs1212-азс-e/new' });
  this.route('i-i-s-azs1212-колонка-l');
  this.route('i-i-s-azs1212-колонка-e',
  { path: 'i-i-s-azs1212-колонка-e/:id' });
  this.route('i-i-s-azs1212-колонка-e.new',
  { path: 'i-i-s-azs1212-колонка-e/new' });
  this.route('i-i-s-azs1212-оплата-l');
  this.route('i-i-s-azs1212-оплата-e',
  { path: 'i-i-s-azs1212-оплата-e/:id' });
  this.route('i-i-s-azs1212-оплата-e.new',
  { path: 'i-i-s-azs1212-оплата-e/new' });
  this.route('i-i-s-azs1212-пистолет-l');
  this.route('i-i-s-azs1212-пистолет-e',
  { path: 'i-i-s-azs1212-пистолет-e/:id' });
  this.route('i-i-s-azs1212-пистолет-e.new',
  { path: 'i-i-s-azs1212-пистолет-e/new' });
  this.route('i-i-s-azs1212-регист-остатков-l');
  this.route('i-i-s-azs1212-регист-остатков-e',
  { path: 'i-i-s-azs1212-регист-остатков-e/:id' });
  this.route('i-i-s-azs1212-регист-остатков-e.new',
  { path: 'i-i-s-azs1212-регист-остатков-e/new' });
  this.route('i-i-s-azs1212-резервуар-l');
  this.route('i-i-s-azs1212-резервуар-e',
  { path: 'i-i-s-azs1212-резервуар-e/:id' });
  this.route('i-i-s-azs1212-резервуар-e.new',
  { path: 'i-i-s-azs1212-резервуар-e/new' });
  this.route('i-i-s-azs1212-справочник-цен-l');
  this.route('i-i-s-azs1212-справочник-цен-e',
  { path: 'i-i-s-azs1212-справочник-цен-e/:id' });
  this.route('i-i-s-azs1212-справочник-цен-e.new',
  { path: 'i-i-s-azs1212-справочник-цен-e/new' });
  this.route('i-i-s-azs1212-терминал-l');
  this.route('i-i-s-azs1212-терминал-e',
  { path: 'i-i-s-azs1212-терминал-e/:id' });
  this.route('i-i-s-azs1212-терминал-e.new',
  { path: 'i-i-s-azs1212-терминал-e/new' });
});

export default Router;
