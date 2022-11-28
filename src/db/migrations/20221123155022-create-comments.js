'use strict';
import { CommentsSchema, COMMENTS_TABLE } from '../models/comments.model';

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(COMMENTS_TABLE, CommentsSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(COMMENTS_TABLE);
  }
};
