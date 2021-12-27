'use strict';

/**
 * general-journal service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general-journal.general-journal');
