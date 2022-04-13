import { Serie } from "./series";
import { series } from "./dataSeries";

const seriesTbody: HTMLElement = document.getElementById('series')!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
console.log(series);
renderSeriesInTable(series);