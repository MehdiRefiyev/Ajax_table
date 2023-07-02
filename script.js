document.getElementById("btnn").addEventListener("click", employe);
function employe() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET","text.json",true);

    xhr.onload = function (){
        let list  = document.getElementById("table_place");
        if(this.status  == 200){

           const employes = JSON.parse(this.responseText);

           employes.forEach(element => {
                list.innerHTML += `
                <tr>
                    <th scope='col'>${element.name}</th>
                    <th scope='col'>${element.deparment}</th>
                    <th scope='col'>${element.salary}</th>
                </tr>
                `;
           });
        };
    };

    xhr.send();

}