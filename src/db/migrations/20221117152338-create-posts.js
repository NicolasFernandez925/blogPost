'use strict';
import { PostsSchema, POSTS_TABLE } from '../models/posts.model';

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(POSTS_TABLE, PostsSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(POSTS_TABLE);
  }
};
