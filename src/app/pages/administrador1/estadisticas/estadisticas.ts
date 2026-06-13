import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts'; // ✅ provideEchartsCore

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective
  ],
  providers: [
    provideEchartsCore({ echarts: () => import('echarts') }) // ✅ con lazy import
  ],
  templateUrl: './estadisticas.html',
  styleUrls: ['./estadisticas.css']
})
export class Estadisticas implements AfterViewInit {

  chartsListos = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chartsListos = true;
      this.cdr.detectChanges();
    }, 0);
  }

  chartReparaciones = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
    },
    yAxis: { type: 'value' },
    series: [{
      data: [15, 28, 35, 48, 60, 78],
      type: 'line',
      smooth: true,
      areaStyle: { opacity: 0.15 },
      itemStyle: { color: '#2563eb' }
    }]
  };

  chartTecnicos = {
    tooltip: { trigger: 'item' },
    legend: { bottom: 0 },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: true,
      data: [
        { value: 95, name: 'Carlos' },
        { value: 82, name: 'Pedro' },
        { value: 90, name: 'Luis' }
      ]
    }]
  };

  chartIngresos = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']
    },
    yAxis: {
      type: 'value',
      axisLabel: { formatter: 'S/. {value}' }
    },
    series: [{
      data: [3200, 5400, 7200, 9800],
      type: 'bar',
      itemStyle: { color: '#10b981', borderRadius: [4, 4, 0, 0] }
    }]
  };
}