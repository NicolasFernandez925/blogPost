'use strict';
import { LabelsPostSchema, LABELS_POSTS_TABLE } from '../models/labels-posts.model';

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(LABELS_POSTS_TABLE, LabelsPostSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(LABELS_POSTS_TABLE);
  }
};
