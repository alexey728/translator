const resultElem = document.querySelector('#result');
const searchElem = document.querySelector('#search');
let products = [];



function render(list){
	resultElem.innerText='';
	for(elem of list){
	  let {name,eng_name,color,hide} = elem;
	  console.log(name)
		const divElem = document.createElement('div');
		
		const nameElem = document.createElement('p');
		const closeElem = document.createElement('div');
		divElem.classList.add('card_lst');
		closeElem.classList.add('close')
		nameElem.innerText = name;
		divElem.style.backgroundColor =color;
		closeElem.innerText = '✖';
		divElem.append(nameElem,closeElem);
		resultElem.append(divElem);
		if(hide){
		  nameElem.innerText = eng_name;
		}else{
		  nameElem.innerText = name;
		}
		
		divElem.addEventListener('dblclick',event =>{
		  for(let i=0;i<products.length;i++){
		    if(products[i].name === name){
		      products[i].hide = ! products[i].hide;
		    }
		  }
		  render(products);
    });
    closeElem.addEventListener('click',event=> {
      products = products.filter(elem => elem.name !== name);
      render(products)
    });
	}
}
render(products)

document.forms[0].addEventListener('submit', (event) =>{
	event.preventDefault();
	const nameInput = event.target.name.value;
	const eng_nameInput = event.target.eng_name.value;
	const colorInput = event.target.color.value;
	if(nameInput !== ''&& eng_nameInput !== '' && colorInput !== '' ){
		products.push({
			name: nameInput,
			eng_name: eng_nameInput,
			color: colorInput,
			hide: false
		});
	}else{
		alert('Введите значения!');
	}
	event.target.name.value= '';
	event.target.eng_name.value= '';
	event.target.color.value= '';
	render(products);
})

searchElem.addEventListener('input', (event) =>{
	const value = searchElem.value;	
	const Elem = products.filter(elem => elem.name.startsWith(value));
	render(Elem)
})







