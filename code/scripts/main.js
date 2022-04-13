"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coursesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
function renderCoursesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        coursesTbody.appendChild(trElement);
    });
}
