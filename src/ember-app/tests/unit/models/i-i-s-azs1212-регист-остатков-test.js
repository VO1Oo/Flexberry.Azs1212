import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-azs1212-регист-остатков', 'Unit | Model | i-i-s-azs1212-регист-остатков', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-azs1212-азс',
    'model:i-i-s-azs1212-карты',
    'model:i-i-s-azs1212-колонка',
    'model:i-i-s-azs1212-оплата',
    'model:i-i-s-azs1212-пистолет',
    'model:i-i-s-azs1212-регист-остатков',
    'model:i-i-s-azs1212-резервуар',
    'model:i-i-s-azs1212-состав',
    'model:i-i-s-azs1212-справочник-цен',
    'model:i-i-s-azs1212-терминал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
