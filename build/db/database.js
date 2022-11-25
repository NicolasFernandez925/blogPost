"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonDatabase = void 0;
const Sequelize_1 = require("Sequelize");
const users_model_1 = require("./models/users.model");
const categories_model_1 = require("./models/categories.model");
const posts_model_1 = require("./models/posts.model");
const labels_posts_model_1 = require("./models/labels-posts.model");
const labels_model_1 = require("./models/labels.model");
const comments_model_1 = require("./models/comments.model");
class SingletonDatabase {
    constructor({ nameDb, userNameDb, passwordDb, configDb }) {
        SingletonDatabase.sequelize = new Sequelize_1.Sequelize(nameDb, userNameDb, passwordDb, configDb);
        this.setupModels();
    }
    static create({ nameDb, userNameDb, passwordDb, configDb }) {
        if (SingletonDatabase.instance === undefined) {
            SingletonDatabase.instance = new SingletonDatabase({ nameDb, userNameDb, passwordDb, configDb });
        }
        return SingletonDatabase.instance;
    }
    setupModels() {
        users_model_1.User.init(users_model_1.UsersSchema, users_model_1.User.config(SingletonDatabase.sequelize));
        categories_model_1.Category.init(categories_model_1.CategoriesSchema, categories_model_1.Category.config(SingletonDatabase.sequelize));
        posts_model_1.Post.init(posts_model_1.PostsSchema, posts_model_1.Post.config(SingletonDatabase.sequelize));
        labels_model_1.Label.init(labels_model_1.LabelSchema, labels_model_1.Label.config(SingletonDatabase.sequelize));
        labels_posts_model_1.LabelPost.init(labels_posts_model_1.LabelsPostSchema, labels_posts_model_1.LabelPost.config(SingletonDatabase.sequelize));
        comments_model_1.Comment.init(comments_model_1.CommentsSchema, comments_model_1.Comment.config(SingletonDatabase.sequelize));
        categories_model_1.Category.associate(SingletonDatabase.sequelize.models);
        posts_model_1.Post.associate(SingletonDatabase.sequelize.models);
        users_model_1.User.associate(SingletonDatabase.sequelize.models);
        labels_model_1.Label.associate(SingletonDatabase.sequelize.models);
        comments_model_1.Comment.associate(SingletonDatabase.sequelize.models);
    }
}
exports.SingletonDatabase = SingletonDatabase;
//# sourceMappingURL=database.js.map