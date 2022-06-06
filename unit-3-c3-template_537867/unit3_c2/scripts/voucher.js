


async function show() {
    try {
        var res = await fetch(" https://masai-vouchers-api.herokuapp.com/api/vouchers");
      var data = await res.json();
     console.log(data);
      appendData(data.voucher_list.data)


    } catch (err) {
         //console.log(err);
      }
    }
    show();

    let voucher_list = document.querySelector(".vouchers")
    function appendData(data){
        data.forEach(function(ele,idx){
        let div= document.createElement("div");
        div.setAttribute("id","div")
    
        let img = document.createElement("img")
        img.src = ele.image;
    
        let name = document.createElement("p")
        name.innerText = ele.title
      

        var pro_price = document.createElement("p");
        pro_price.innerText = ele.price;

      

        vouvhers(ele,idx)
            div.append(img, name,pro_des, pro_inde, pro_price,buy);
    
            voucher_list.append(vouchers)
        
        })
  

  
        var purches = document.getElementById("purchase");
        voucher_list.addEventListener("click", function (e) {
          location.href = "./voucher.html";
        });
    // //  });
  
//       // console.log("fill");
// //    } 
//  // }
  
  function vouchers(ele,idx) {
    var count = document.getElementById("count");
    var arr = localStorage.getItem("voucher_list");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("voucher_list"));
    }
    arr.push(ele);
    arr = localStorage.setItem("voucher", JSON.stringify(arr));
    count.innerHTML = JSON.parse(localStorage.getItem("voucher_list")).length;
  }