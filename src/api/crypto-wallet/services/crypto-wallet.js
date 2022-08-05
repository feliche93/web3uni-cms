'use strict';

/**
 * crypto-wallet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crypto-wallet.crypto-wallet');
