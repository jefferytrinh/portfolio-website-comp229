function showInputs()
{
    document.getElementById("input-area").style.display = "block";
}
function drawTable()
{
    const rows = Number(document.getElementById("rows").value);
    const cols = Number(document.getElementById("cols").value);
    let table = "<table>";
    for (let r = 1; r <= rows; r++) {
        table += "<tr>";
        for (let c = 1; c <= cols; c++) {
            table += '<td>' + (r * c) + '</td>';
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("tableContainer").innerHTML = table;
}