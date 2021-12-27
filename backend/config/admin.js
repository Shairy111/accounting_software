module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3bd5b0da874612382ac642ce7efae917'),
  },
});
