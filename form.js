const btnGuardar = document.getElementById('guardar');
const nameValue = document.querySelector('#name');

let arr = [];


btnGuardar.addEventListener('click', () => {
  arr.push(nameValue.value)
  localStorage.setItem('general-list', arr)
  console.log(arr)
  nameValue.value = '';
  renderElement(arr)
})

const form = document.getElementById('product-form');
form.addEventListener('submit',function(event){
  event.preventDefault(); 
})


function renderElement() {
  let container = document.getElementById('product-list')
  console.log(arr)
  container.innerHTML = '';
  arr.forEach(function (el) {
    container.innerHTML += `
    <div class="card text-center mb-4">
    <div class="card-body">
    <strong>To-do</strong>: ${el}
    <button class="btn btn-outline-danger btn-sm " onclick="remove(this.id)" id="${el}">Eliminar</button>
    <button class="btn btn-outline-info btn-sm" onclick="edit(this.id)" id="${el}">Editar</button>
     </div>
 </div>
  `;
  })

}


function edit(){
    let editV = document.getElementById('product-list')
    console.log(arr)
    editV.innerHTML = '';
    arr.forEach(function(el){
        editV.innerHTML = `
        <div id="edit-display" class="ctwo text-center">
                  <div  class=" displayedit text-center mb-1">
                    <input type="text" id="box" placeholder="Editar">
                    <button class="btn btn-outline-success btn-sm" onclick="remplazo()" >Reemplazar</button>
                    <button class="btn  btn-outline-danger btn-sm " onclick="remove(this.id)" id="${el}">Eliminar</button>
                  </div>
        `;
    })
    
}

function remplazo(){
    const boxValue = document.getElementById('box').value;
      const boxIndex = arr.indexOf(boxValue);
      console.log(boxIndex)
      let nuevoValor
      console.log(boxValue);
      if( boxValue === undefined || null || '' ){
          alert('Favor de ingresar el elemento')
      } else {
          nuevoValor = arr.push(boxValue);
          arr.splice(boxIndex,1,boxValue);
          renderElement()
          localStorage.removeItem('general-list', arr[boxIndex]);
          localStorage.setItem('general-list', arr);
          //aqu?? ya solo hay que remover el item anterior pero no me dio tiempo sorry
          remove()
      }      
}  




function remove(element){
  console.log(element)
   arr.splice(element,1)
   localStorage.setItem('general-list', arr)
  renderElement()
}


function getElements() {
  let localS = localStorage.getItem('general-list');
  arr = localS.split(',');
  renderElement()
}
getElements()