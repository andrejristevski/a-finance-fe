// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  baseUrl: 'https://enigmatic-fjord-76871.herokuapp.com',
  curPairPath: 'rates',
  strength: 'strength',
  percentagesum: 'percentagesum',
  initialInputCur: 'EUR',
  initialOutputCur: 'AUD',
  firebase: {
    apiKey: 'AIzaSyDu_gbNfdaLrF0RTJayYUlhs78nW1jT3O0',
    authDomain: 'andrej-finance.firebaseapp.com',
    databaseURL: 'https://andrej-finance.firebaseio.com',
    projectId: 'andrej-finance',
    storageBucket: 'andrej-finance.appspot.com',
    messagingSenderId: '637776522432'
  }
};
export const ChartType = {
  'PAIR': 'PairData',
  'CURRENCY_STRENGTH': 'Currency strength',
  // 'PERCENTAGE_SUM': 'Percentage sum',
};

export const PercentageSumCur = ['EUR', 'CAD', 'USD', 'JPY', 'AUD', 'CNY'];

export const notificationOptions = {
  timeout: 5000,
  showProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  position: 'centerTop',
};
