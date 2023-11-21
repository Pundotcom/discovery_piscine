$(document).ready(() => {
    let ckies = document.cookie;
    let list = $("#ft_list");
    if (ckies.length > 0) {
      let ckie = ckies.split(";");
      $.each(ckie, (key, value) => {
        console.log(key, value);
        let todo = value.split("=")[1];
        let cookieValue = decodeURIComponent(todo);
        let newNode = $("<div></div>").text(cookieValue);
        newNode.addClass("todo")
        newNode.click(() => {
          let remove = confirm("Do you want to remove this to-do?");
          if (remove) {
            newNode.remove();
            document.cookie =
              value.split("=")[0] +
              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          }
        });
        list.prepend(newNode);
      });
    }

    $("#newTodo").click(() => {
      let todoPrompt = prompt("Create a new To-do");
      if (todoPrompt != null && todoPrompt != "") {
        let name = new Date().getTime();
        let encodedValue = encodeURIComponent(todoPrompt);
        document.cookie = `${name}=${encodedValue}`;
        let newNode = $("<div></div>").text(todoPrompt);
        newNode.addClass("todo")
        newNode.click(() => {
          let remove = confirm("Do you want to remove this to-do?");
          if (remove) {
              newNode.remove();
              document.cookie =
              name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          }
        });
        list.prepend(newNode);
      }
    });
  });