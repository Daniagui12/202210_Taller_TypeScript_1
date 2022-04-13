import { Serie } from "./scripts/series";

const coursesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    coursesTbody.appendChild(trElement);
  });
}