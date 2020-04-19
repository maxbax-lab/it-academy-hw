function mySearch() {
    let input = document.getElementById("Search");
    let filter = input.value.toLowerCase();
    let nodes = document.getElementsByClassName('item');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
      } else {
        nodes[i].style.display = "none";
      }
    }
  }