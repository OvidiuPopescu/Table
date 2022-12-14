const inputElement = document.getElementById("input");
inputElement.addEventListener("change", function handleFiles() {
    var fr = new FileReader();

    fr.onload = function() {
      
      let toArray = fr.result.split("");
      console.log(toArray);

      let row1 = document.getElementById("data1");
      row1.innerHTML = toArray.slice(0,9).join("");
      let row2 = document.getElementById("data2");
      row2.innerHTML = toArray.slice(9,18).join("");
      let row3 = document.getElementById("data3");
      row3.innerHTML = toArray.slice(18,27).join("");
      let row4 = document.getElementById("data4");
      row4.innerHTML = toArray.slice(27,36).join("");
      let row5 = document.getElementById("data5");
      row5.innerHTML = toArray.slice(36,45).join("");
      let row6 = document.getElementById("data6");
      row6.innerHTML = toArray.slice(45,54).join("");
      let row7 = document.getElementById("data7");
      row7.innerHTML = toArray.slice(54,63).join("");
      let row8 = document.getElementById("data8");
      row8.innerHTML = toArray.slice(63,72).join("");
      let row9 = document.getElementById("data9");
      row9.innerHTML = toArray.slice(72,81).join("");
      let row10 = document.getElementById("data10");
      row10.innerHTML = toArray.slice(81,90).join("");

      let selectContainer = document.getElementById('select-container');

      selectContainer.style.display = "block";

      let select1 = document.getElementById('A');
      let select2 = document.getElementById('B');
      let select3 = document.getElementById('C');

      selectContainer.addEventListener('change', function(){
        let x = select1.value;
        let y = select2.value;
        let z = select3.value;
        
        if (x==0 && y==0 && z==0) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = toArray.slice(9,18).join("");
          row3.innerHTML = toArray.slice(18,27).join("");
          row4.innerHTML = toArray.slice(27,36).join("");
          row5.innerHTML = toArray.slice(36,45).join("");
          row6.innerHTML = toArray.slice(45,54).join("");
          row7.innerHTML = toArray.slice(54,63).join("");
          row8.innerHTML = toArray.slice(63,72).join("");
          row9.innerHTML = toArray.slice(72,81).join("");
          row10.innerHTML = toArray.slice(81,90).join("");
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "block";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "block";
          select2.options[4].style.display = "block";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "block";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "block";
          select3.options[7].style.display = "block";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "block";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case1");
        }

        if (x==0 && y==1 && z==0) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = toArray.slice(9,18).join("");
          row3.innerHTML = toArray.slice(18,27).join("");
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case2");
        }

        if (x==0 && y==1 && z==1) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case3");
        }

        if (x==0 && y==1 && z==2) {
          row1.innerHTML = "";
          row2.innerHTML = toArray.slice(9,18).join("");
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case4");
        }

        if (x==0 && y==1 && z==3) {
          row1.innerHTML = "";
          row2.innerHTML = "";
          row3.innerHTML = toArray.slice(18,27).join("");
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case5");
        }

        if (x==0 && y==2 && z==0) {
          row1.innerHTML = toArray.slice(27,36).join("");
          row2.innerHTML = toArray.slice(36,45).join("");
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case6");
        }

        if (x==0 && y==2 && z==4) {
          row1.innerHTML = toArray.slice(27,36).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case7");
        }

        if (x==0 && y==2 && z==5) {
          row1.innerHTML = toArray.slice(36,45).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case8");
        }

        if (x==0 && y==3 && z==0) {
          row1.innerHTML = toArray.slice(45,54).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "block";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "C6";

          console.log("case9");
        }

        if (x==0 && y==4 && z==0) {
          row1.innerHTML = toArray.slice(54,63).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "block";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "C7";

          console.log("case10");
        }

        if (x==0 && y==5 && z==0) {
          row1.innerHTML = toArray.slice(63,72).join("");
          row2.innerHTML = toArray.slice(72,81).join("");
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case11");
        }

        if (x==0 && y==5 && z==8) {
          row1.innerHTML = toArray.slice(63,72).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";


          console.log("case12");
        }

        if (x==0 && y==5 && z==9) {
          row1.innerHTML = toArray.slice(72,81).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";


          console.log("case13");
        }

        if (x==0 && y==6 && z==0) {
          row1.innerHTML = toArray.slice(81,90).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "block";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A3";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "C10";

          console.log("case14");
        }

        if (x==1 && y==0 && z==0) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = toArray.slice(9,18).join("");
          row3.innerHTML = toArray.slice(18,27).join("");
          row4.innerHTML = toArray.slice(27,36).join("");
          row5.innerHTML = toArray.slice(36,45).join("");
          row6.innerHTML = toArray.slice(45,54).join("");
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "block";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "block";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case15");
        }

        if (x==1 && y==1 && z==0) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = toArray.slice(9,18).join("");
          row3.innerHTML = toArray.slice(18,27).join("");
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case16");
        }

        if (x==1 && y==1 && z==1) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case17");
        }

        if (x==1 && y==1 && z==2) {
          row1.innerHTML = toArray.slice(9,18).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case18");
        }

        if (x==1 && y==1 && z==3) {
          row1.innerHTML = toArray.slice(18,27).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "block";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case20");
        }

        if (x==1 && y==2 && z==0) {
          row1.innerHTML = toArray.slice(27,36).join("");
          row2.innerHTML = toArray.slice(36,45).join("");
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case21");
        }

        if (x==1 && y==2 && z==4) {
          row1.innerHTML = toArray.slice(27,36).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case22");
        }

        if (x==1 && y==2 && z==5) {
          row1.innerHTML = toArray.slice(36,45).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "block";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case23");
        }

        if (x==1 && y==3 && z==0) {
          row1.innerHTML = toArray.slice(45,54).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "block";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "block";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "C6";

          console.log("case24");
        }

        if (x==2 && y==0 && z==0) {
          row1.innerHTML = toArray.slice(54,63).join("");
          row2.innerHTML = toArray.slice(63,72).join("");
          row3.innerHTML = toArray.slice(72,81).join("");
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "block";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "block";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case36");
        }

        if (x==2 && y==4 && z==0) {
          row1.innerHTML = toArray.slice(54,63).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "block";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "C7";

          console.log("case37");
        }

        if (x==2 && y==5 && z==0) {
          row1.innerHTML = toArray.slice(63,72).join("");
          row2.innerHTML = toArray.slice(72,81).join("");
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case38");
        }

        if (x==2 && y==5 && z==8) {
          row1.innerHTML = toArray.slice(63,72).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case39");
        }

        if (x==2 && y==5 && z==9) {
          row1.innerHTML = toArray.slice(72,81).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "none";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "block";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "Toate";
          select3.options[0].innerHTML = "Toate";

          console.log("case40");
        }

        if (x==2 && y==0 && z==7) {
          row1.innerHTML = toArray.slice(54,63).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "block";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "B4";
          select3.options[0].innerHTML = "Toate";

          console.log("case41");
        }

        if (x==2 && y==0 && z==8) {
          row1.innerHTML = toArray.slice(63,72).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "B5";
          select3.options[0].innerHTML = "Toate";

          console.log("case42");
        }

        if (x==2 && y==0 && z==9) {
          row1.innerHTML = toArray.slice(72,81).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "none";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "block";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "B5";
          select3.options[0].innerHTML = "Toate";

          console.log("case43");
        }


        if (x==3 && y==0 && z==0) {
          row1.innerHTML = toArray.slice(81,90).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "block";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "Toate";
          select2.options[0].innerHTML = "B6";
          select3.options[0].innerHTML = "C10";

          console.log("case25");
        }

        if (x==0 && y==0 && z==1) {
          row1.innerHTML = toArray.slice(0,9).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "block";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "B1";
          select3.options[0].innerHTML = "Toate";

          console.log("case26");
        }

        if (x==0 && y==0 && z==2) {
          row1.innerHTML = toArray.slice(9,18).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "block";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "B1";
          select3.options[0].innerHTML = "Toate";

          console.log("case27");
        }

        if (x==0 && y==0 && z==3) {
          row1.innerHTML = toArray.slice(18,27).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "block";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "B1";
          select3.options[0].innerHTML = "Toate";

          console.log("case28");
        }

        if (x==0 && y==0 && z==4) {
          row1.innerHTML = toArray.slice(27,36).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "block";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "B2";
          select3.options[0].innerHTML = "Toate";

          console.log("case29");
        }

        if (x==0 && y==0 && z==5) {
          row1.innerHTML = toArray.slice(36,45).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "block";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "B2";
          select3.options[0].innerHTML = "Toate";

          console.log("case30");
        }

        if (x==0 && y==0 && z==6) {
          row1.innerHTML = toArray.slice(45,54).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "block";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A1";
          select2.options[0].innerHTML = "B3";
          select3.options[0].innerHTML = "Toate";

          console.log("case31");
        }

        if (x==0 && y==0 && z==7) {
          row1.innerHTML = toArray.slice(54,63).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "block";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "B4";
          select3.options[0].innerHTML = "Toate";

          console.log("case32");
        }

        if (x==0 && y==0 && z==8) {
          row1.innerHTML = toArray.slice(63,72).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "block";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "B5";
          select3.options[0].innerHTML = "Toate";

          console.log("case33");
        }
        
        if (x==0 && y==0 && z==9) {
          row1.innerHTML = toArray.slice(72,81).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "block";
          select3.options[10].style.display = "none";

          select1.options[0].innerHTML = "A2";
          select2.options[0].innerHTML = "B5";
          select3.options[0].innerHTML = "Toate";

          console.log("case34");
        }

        if (x==0 && y==0 && z==10) {
          row1.innerHTML = toArray.slice(81,90).join("");
          row2.innerHTML = "";
          row3.innerHTML = "";
          row4.innerHTML = "";
          row5.innerHTML = "";
          row6.innerHTML = "";
          row7.innerHTML = "";
          row8.innerHTML = "";
          row9.innerHTML = "";
          row10.innerHTML = "";
          
          select1.options[0].style.display = "block";
          select1.options[1].style.display = "none";
          select1.options[2].style.display = "none";
          select1.options[3].style.display = "none";

          select2.options[0].style.display = "block";
          select2.options[1].style.display = "none";
          select2.options[2].style.display = "none";
          select2.options[3].style.display = "none";
          select2.options[4].style.display = "none";
          select2.options[5].style.display = "none";
          select2.options[6].style.display = "none";

          select3.options[0].style.display = "block";
          select3.options[1].style.display = "none";
          select3.options[2].style.display = "none";
          select3.options[3].style.display = "none";
          select3.options[4].style.display = "none";
          select3.options[5].style.display = "none";
          select3.options[6].style.display = "none";
          select3.options[7].style.display = "none";
          select3.options[8].style.display = "none";
          select3.options[9].style.display = "none";
          select3.options[10].style.display = "block";

          select1.options[0].innerHTML = "A3";
          select2.options[0].innerHTML = "B6";
          select3.options[0].innerHTML = "Toate";

          console.log("case35");
        }

      })

    }      
    fr.readAsText(this.files[0]);
});



