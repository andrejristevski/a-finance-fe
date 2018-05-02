export const environment = {
  production: true,
  baseUrl: 'https://enigmatic-fjord-76871.herokuapp.com',
  curPairPath: 'rates',
  strength: 'strength',
  percentagesum: 'percentagesum',
  initialInputCur: 'EUR',
  initialOutputCur: 'AUD',
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
  closeOnClick: false,
  pauseOnHover: false,
  position: 'centerTop',
};
