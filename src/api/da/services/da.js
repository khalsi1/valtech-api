'use strict';

/**
 * da service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::da.da');
