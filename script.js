fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((jsonData) => {
    // console.log(jsonData);
    var tableData = "";

    jsonData.map((value, key) => {
      tableData += `
      <tr>
      <td>${key + 1}</td>
      <td>${value.title}</td>
      <td>${value.description}</td>
      <td>${value.price}</td>
      <td><img src="${value.image}" /></td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  });
