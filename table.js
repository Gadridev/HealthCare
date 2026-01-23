let getData = JSON.parse(localStorage.getItem("data") || "[]");
let search=document.getElementById("search");
let filterData = [...getData];
function initTable() {
  showData();
}
//first commit
function showData() {
  const container = document.querySelector("tbody");
  container.innerHTML = "";

  filterData.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.className = "bg-white border-b hover:bg-gray-50";

    tr.innerHTML = `
      <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        ${item.nom}
      </th>
      <td class="px-6 py-4">${item.prenom}</td>
      <td class="px-6 py-4">${item.email}</td>
      <td class="px-6 py-4">${item.motif}</td>
      <td class="px-6 py-4">${item.date}</td>
      <td class="px-6 py-4 text-right">
        <button
          class="bg-blue-50 p-3 rounded-[15px] font-medium text-red-600 hover:underline"
          onclick="deleteItem(${index})">
          Delete
        </button>
      </td>
    `;
    container.appendChild(tr);
  });
}
function deleteItem(index) {
  getData.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(getData));
  showData();
}
document.addEventListener("DOMContentLoaded", initTable);
