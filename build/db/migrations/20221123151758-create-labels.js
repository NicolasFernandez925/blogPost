'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const labels_model_1 = require("../models/labels.model");
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable(labels_model_1.LABELS_TABLE, labels_model_1.LabelSchema);
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable(labels_model_1.LABELS_TABLE);
        });
    }
};
//# sourceMappingURL=20221123151758-create-labels.js.map