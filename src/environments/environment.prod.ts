export const environment = {
  production: true,
  baseUrl: 'http://localhost:5000',
  // baseUrl: 'https://a-rates.herokuapp.com',
  curPairPath: 'rates',
  strength: 'strength',
  percentagesum: 'percentagesum',
  initialInputCur: 'EUR',
  initialOutputCur: 'AUD',
};
export const ChartType = {
  'PAIR': 'PairData',
  'CURRENCY_STRENGTH': 'Percentage strength',
  'PERCENTAGE_SUM': 'Percentage sum',
};

export const PercentageSumCur = ['EUR', 'CAD', 'USD', 'JPY', 'AUD', 'CNY'];

export const notificationOptions = {
  timeout: 5000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  position: 'centerTop',
};
