export const environment = {
  production: true,
  baseUrl: 'http://localhost:5000',
  // baseUrl: 'https://a-rates.herokuapp.com',
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
  'CURRENCY_STRENGTH': 'Percentage strength',
  'PERCENTAGE_SUM': 'Percentage sum',
};

export const PercentageSumCur = ['EUR', 'CAD', 'USD', 'JPY', 'AUD', 'CNY'];
