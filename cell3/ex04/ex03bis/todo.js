$(document).ready(() => {
  let ckies = document.cookie;
  let list = $("#ft_list"); // เข้าถึง element
  // console.log('document.cookie: ' + ckies);
  // console.log(ckies);
  ///The ready() method is used to make a function available after the document is loaded. Whatever code you write inside the $(document ). ready() method will run once the page DOM is ready to execute JavaScript code.

  if (ckies.length > 0) {
    let ckie = ckies.split(";");
    // console.log(ckie);
    ckie.forEach((x) => {
      // console.log(x);
      let todo = x.split("=")[1];

      //1687463973310=abcd
      //.split("=")[1] = ['1687463973310','abcd'] index[1] คือ abcd

      // console.log(todo);
      let cookieValue = decodeURIComponent(todo);
      // console.log(cookieValue);
      let newNode = $("<div></div>").text(cookieValue);
      newNode.addClass("input");
      newNode.click(() => {
        let remove = confirm("REMOVE");
        if (remove) {
          newNode.remove();
          document.cookie = x.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        } // x.split("=")[0] คือ ['1687463973310','abcd'] index[0] เช็ควันหมดอายุ
      });
      list.prepend(newNode);
    });
  }

  $("#newTodo").click(() => {
    let input = prompt("NEW LIST");
    if (input != null && input != "" ) {
      let date = new Date().getTime(); //getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

      // console.log('new Date().getTime() : '+ date);

      let encodedValue = encodeURIComponent(input);

      // console.log('encodeURIComponent(input): '+ encodedValue);

      document.cookie = `${date}=${encodedValue}`;

      //------ตัวเลขวันเวลา = inputที่ใส่มา-----------------//

      // console.log(input);
      let newNode = $("<div></div>").text(input);
      // console.log(newNode);

      newNode.addClass("input");
      newNode.click(() => {
        let remove = confirm("REMOVE");
        if (remove) {
          newNode.remove(); //เอาออกจาก html
          document.cookie = date + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          //Early definitions of Unix time also lacked timezones. The current epoch of 1 January 1970 00:00:00 UTC was selected arbitrarily by Unix engineers because it was considered a convenient date to work with. The precision was changed to count in seconds in order to avoid short-term overflow.
        } // เอาออกจากหน่วงความจำ cookie โดยการจับมันให้หมดอายุ
      });
      list.prepend(newNode); //prepend() คือ คำสั่งสำหรับการเพิ่ม Elements ใหม่ไว้ภายในด้านบนแบบไม่ต้องมี Element คุมข้อมูล                                                       // นำ list ไว้ด้านบน
    }
  });
});
