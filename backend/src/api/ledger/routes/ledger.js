'use strict';

/**
 * ledger router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ledger.ledger');
