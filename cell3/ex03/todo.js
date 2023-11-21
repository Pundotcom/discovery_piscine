let ckies = document.cookie;
let list = document.getElementById("ft_list");
console.log(ckies);
if (ckies.length > 0) {
  let ckie = ckies.split(";");
  ckie.forEach((e) => {
    const newNode = document.createElement("div");
    newNode.classList.add("todo");
    newNode.innerHTML = e.split("=")[1];
    newNode.onclick = () => {
      let remove = confirm("REMOVE");
      if (remove) {
        newNode.remove();
        console.log(e.split("=")[0]);
        document.cookie = e.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    };
    list.prepend(newNode);
  });
}

const ADDTodo=()=> {
  let todo = prompt("NEW LIST");
  if (todo != null && todo != "") {
    let name = new Date().getTime();
    document.cookie = name + "=" + todo;
    const newNode = document.createElement("div");
    newNode.classList.add("todo");
    newNode.innerHTML = todo;
    newNode.onclick = () => {
      let remove = confirm("REMOVE");
      if (remove) {
        newNode.remove();
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    };
    list.prepend(newNode);
  }
}
