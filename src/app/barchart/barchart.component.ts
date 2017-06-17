import { Component} from '@angular/core';
import { GoogleChartComponent} from '../googlechart/googlechart.component';

@Component({
  selector: 'barchart',
  template: `
    <div class="four wide column center aligned">
        <div id="chart_barElement" style="width: 900px; height: 500px;"></div>
    </div>
    <div class="combo_chart">
        <div id="chart_comboElement" style="width: 900px; height: 500px;"></div>
    </div>
  `
})
export class BarchartComponent extends GoogleChartComponent {
  private options;
  private data_BarChart;
  private barChar;
  constructor(){
    super();
    console.log("Here is EvolutionComponent")
  }

  drawGraph(){
    console.log("DrawGraph Evolution...");  
    this.data_BarChart = this.createDataTable([
      ['Evolution', 'Imports', 'Exports'],
      ['A', 8695000, 6422800],
      ['B', 3792000, 3694000],
      ['C', 8175000, 800800]
    ]);

    this.options = {
      title: 'Evolution, 2014',
      chartArea: {width: '50%'},
      hAxis: {
        title: 'Value in USD',
        minValue: 0
      },
      vAxis: {
        title: 'Members'
      }
    };

    this.barChar = this.createBarChart(document.getElementById('chart_barElement'));
    this.barChar.draw(this.data_BarChart, this.options);

    this.drawComboChart();
        
    
  }

  drawComboChart(){
      let comboChartOption = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };
      let comboChartData = this.createDataTable(
        [
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
         ]
      );
      this.barChar = this.createChartWrapper(comboChartOption, "ComboChart", comboChartData, "chart_comboElement");
    
    this.barChar.draw();
  }

  
}