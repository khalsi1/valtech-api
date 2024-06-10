module.exports = () => ({
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      hooks: {
        preResponseTransform: (ctx) =>
          console.log("hello from the preResponseTransform hook!"),
        postResponseTransform: (ctx) =>
          console.log("hello from the postResponseTransform hook!"),
      },
      contentTypeFilter: {
        mode: "allow",
        uids: {
          "api::benefit.benefit": true,
          "api::product.product": true,
          "api::da.da": true,
          "api::project.project": true,
          "api::contact.contact": true,
          "api::branche.branche": true,
          "api::home.home": true,
          "api::about.about": true,
          "api::service.service": true,
          "api::message.message": true,
        },
      },
      plugins: {
        ids: {
          slugify: true,
        },
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
});
