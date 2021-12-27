"use strict";

/**
 *  general-journal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::general-journal.general-journal", {
  prefix: "",
  except: [],
  config: {
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
