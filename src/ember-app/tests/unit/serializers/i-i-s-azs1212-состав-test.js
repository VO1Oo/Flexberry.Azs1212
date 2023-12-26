import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-azs1212-состав', 'Unit | Serializer | i-i-s-azs1212-состав', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-azs1212-состав',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-azs1212-состояние',
    'transform:i-i-s-azs1212-тип-оплаты',
    'transform:i-i-s-azs1212-тип-топлива',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
