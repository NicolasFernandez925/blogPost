'use strict';
import { LabelSchema, LABELS_TABLE } from '../models/labels.model';

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(LABELS_TABLE, LabelSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(LABELS_TABLE);
  }
};
