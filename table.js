let getData = JSON.parse(localStorage.getItem("data") || "[]");
let search = document.getElementById("search");
let filterData = [...getData];
let itemsPerPage = 5;
let currentPage = 1;   
let totalItems = getData.length;   
let totalPages = Math.ceil(totalItems / itemsPerPage);   
function getPerPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filterData.slice(startIndex, endIndex);
}
function createPagination() {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";
  totalPages = Math.ceil(filterData.length / itemsPerPage); 

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.className="border border-black px-4 rounded-[20px]"
    prevButton.onclick = () => changePage(currentPage - 1);
    paginationContainer.appendChild(prevButton);
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = currentPage === i ? "active " : "";
    pageButton.onclick = () => changePage(i);
    paginationContainer.appendChild(pageButton);
  }
  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.className="border border-black px-4 rounded-[20px]"
    nextButton.onclick = () => changePage(currentPage + 1);
    paginationContainer.appendChild(nextButton);
  }
}
function changePage(page) {
  if (page < 1 || page > totalPages) return; 

  currentPage = page; 
  showData();
  createPagination();
}
function showData() {
  const container = document.querySelector("tbody");
  container.innerHTML = "";
    const pageData = getPerPage(currentPage);

  pageData.forEach((item) => {
    const tr = document.createElement("tr");
    const index = getData.indexOf(item);

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
function seachItem(value) {
  const seachValue = value.toLowerCase();
  filterData = getData.filter((item) => {
    return (
      item.nom.toLowerCase().includes(seachValue) ||
      item.email.toLowerCase().includes(seachValue) ||
      item.motif.toLowerCase().includes(seachValue)
    );
  });
  currentPage = 1; 
  showData();          
  createPagination(); 
}
search.addEventListener("input", (e) => {
  seachItem(e.target.value);
});
function deleteItem(index) {
  getData.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(getData));
  filterData=[...getData]
  createPagination()
  showData();
}
function initTable() {
  showData();
  createPagination(); 
}

document.addEventListener("DOMContentLoaded", initTable);

