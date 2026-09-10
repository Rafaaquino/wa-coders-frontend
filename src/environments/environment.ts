// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host_api: 'https://wa-coders-backend-api.vercel.app/api/v1', //VERCEL (stable production alias)
  //host_api: 'https://wa-coders-backend-e1sn2k49w-rafaaquinos-projects.vercel.app/api/v1', //VERCEL (stale preview hash, changes every deploy + protected)
  //host_api: 'https://wa-coders-backend-api-7f146f8b0faa.herokuapp.com/api/v1', HEROKU
};
