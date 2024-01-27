
        const Task = document.getElementById('TaskInput');
        const Btn = document.getElementById('Btn');
        const alert = document.getElementById('alert');
        const Get = document.getElementById('Taskget');
        let Arr = [];
        setTimeout(loadArr(),1000)
        Btn.addEventListener("click", handle);
        function handle() {
            // Get.innerHTML += Task.value;
            if (Task.value !== "") {
                // console.log(Get);
                if (localStorage.getItem("Data")) {
                    const ParsedArr = JSON.parse(localStorage.getItem("Data"));
                    ParsedArr.push(Task.value)
                    localStorage.setItem("Data",JSON.stringify(ParsedArr))
                } else {
                    Arr.push(Task.value);
                    localStorage.setItem("Data", JSON.stringify(Arr))
                }
                loadArr();
                Task.value = "";
            }
            else {
                alert.innerHTML += `<div class="alert alert-danger" role="alert">
              please enter the value
              </div>`
            }


        }

        function loadArr() {
            Get.innerHTML = "";
            const ParsedArr = JSON.parse(localStorage.getItem("Data"))
            ParsedArr.map((elem,index) => {
                Get.innerHTML += `<div style="display:flex;">
                <li>${elem}</li>
            <i class="fa-solid fa-person-falling-burst" style="margin-left:20px;" onclick="Delete('${elem}')"></i>
            <i class="fa-solid fa-recycle" style="margin-left:20px;" onclick="Update('${elem}','${index}')"></i>
            </div>`
            })
        }

        function Delete(data) {
            const ParsedArr = JSON.parse(localStorage.getItem("Data"))
            const filtered = ParsedArr.filter((elem) => {
                return elem !== data;
            })
           localStorage.setItem("Data",JSON.stringify(filtered))
            loadArr();
        }

        function Update(data, index) {
            console.log(index);
            const ParsedArr = JSON.parse(localStorage.getItem("Data"))
            const Update = ParsedArr.find((elem) => {
                return elem === data;
            })
            const updateVal = prompt("Edit the task:-", Update);
            ParsedArr.splice(index, 1, updateVal);
            localStorage.setItem("Data",JSON.stringify(ParsedArr))
            loadArr();
        }
