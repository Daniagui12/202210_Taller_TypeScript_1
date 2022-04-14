import { Serie } from "./series.js";
import { series } from "./dataSeries.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
    <td>${c.name}</td>
    <td>${c.channel}</td>
    <td>${c.seasons}</td>`
    seriesTbody.appendChild(trElement);
  });
}
