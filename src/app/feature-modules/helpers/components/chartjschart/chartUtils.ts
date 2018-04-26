import { Injectable } from '@angular/core';


@Injectable()
export class ChartUtils {

    constructor() { }

    getChartVal(ds) {

       return ds.map(set => {
            return {
                label: `${set.inpCur} to ${set.outputCur}`,
                strokeColor: 'black',
                fill: false,
                data: set.rates,
                borderColor: `rgb(${Math.floor(Math.random() * 2) + 55},
                 ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 200) + 55})`,
                lineTension: 0.1,
                radius: 1
            };

        });
    }
}
