// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDu_gbNfdaLrF0RTJayYUlhs78nW1jT3O0',
    authDomain: 'andrej-finance.firebaseapp.com',
    databaseURL: 'https://andrej-finance.firebaseio.com',
    projectId: 'andrej-finance',
    storageBucket: 'andrej-finance.appspot.com',
    messagingSenderId: '637776522432'
  }
};
