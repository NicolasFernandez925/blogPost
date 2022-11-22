'use strict';
import { CATEGORIES_TABLE, CategoriesSchema } from '../models/categories.model';

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
