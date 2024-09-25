import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-tree',
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgFor
  ]
})
export class EstadisticasComponent implements OnInit {
  
  private svg: any;
  private margin = 50;
  private width = 700 - (this.margin * 2);
  private height = 350 - (this.margin * 2);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);

    this.createSvgv2();
    this.drawChart(this.data);
  }

  private data = [
    { month: 'Ene', value: 30 },
    { month: 'Feb', value: 50 },
    { month: 'Mar', value: 40 },
    { month: 'Abr', value: 60 },
    { month: 'May', value: 70 },
    { month: 'Jun', value: 50 }
  ];

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Crear el eje X
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.month))
      .padding(0.2);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Crear el eje Y
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);

    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Crear las barras
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.month))
      .attr("y", (d: any) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.value))
      .attr("fill", "#69b3a2");
  }


  private createSvgv2(): void {
    this.svg = d3.select("figure#line")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawChart(data: any[]): void {
    // Crear el eje X
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.month))
      .padding(0.2);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Crear el eje Y
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);

    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Crear la línea
    const line = d3.line()
      .x((d: any) => x(d.month)! + x.bandwidth() / 2)
      .y((d: any) => y(d.value));

    this.svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Añadir puntos
    this.svg.selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.month)! + x.bandwidth() / 2)
      .attr("cy", (d: any) => y(d.value))
      .attr("r", 5)
      .attr("fill", "#69b3a2");
  }

    
  reset(): void {
    alert(`Reiniciando estadísticas...`);
  }


  back(): void {
    this.router.navigate(['/listado']);
  }

}
