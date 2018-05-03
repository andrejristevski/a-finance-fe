// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    baseUrl: 'http://localhost:5000',
    curPairPath: 'rates',
    strength: 'strength',
    percentagesum: 'percentagesum',
    initialInputCur: 'EUR',
    initialOutputCur: 'AUD',
  };
  export const ChartType = {
    'PAIR': 'PairData',
    'CURRENCY_STRENGTH': 'Currency strength',
  };
  
  export const PercentageSumCur = ['EUR', 'CAD', 'USD', 'JPY', 'AUD', 'CNY', 'MKD'];
  
  export const notificationOptions = {
    timeout: 5000,
    showProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    position: 'centerTop',
  };
