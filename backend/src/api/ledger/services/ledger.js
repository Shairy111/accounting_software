'use strict';

/**
 * ledger service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ledger.ledger');
