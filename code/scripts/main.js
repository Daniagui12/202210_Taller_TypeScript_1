import { series } from "./dataSeries";
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n    <td><a href=\"#\" id=\"").concat(c.name, "\" onclick=\"showInfo()\">").concat(c.name, "</a></td>\n    <td>").concat(c.channel, "</td>\n    <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
