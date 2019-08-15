//interface del objeto
function myObject(ToDo) {
    console.log('${ToDo.tittle} - ${ToDo.text}');
}
//objeto pasado como parámetro al llama a la funcion "myObject"
myObject({ tittle: 'Eat Dinner', text: 'Jorem' });
