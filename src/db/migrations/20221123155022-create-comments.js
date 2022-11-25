'use strict';
import { DataTypes } from 'Sequelize';
import { POSTS_TABLE } from '../models/posts.model';

const COLUMN = 'publicationDate';

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(POSTS_TABLE, COLUMN, {
      defaultValue: DataTypes.NOW
    });
  },

  async down(queryInterface) {
    await queryInterface.changeColumn(POSTS_TABLE, COLUMN, {
      defaultValue: DataTypes.NOW
    });
  }
};
