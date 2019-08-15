

interface IToDo{
    tittle: string;
    text: string;
}


//interface del objeto
function myObject(ToDo: IToDo){
    console.log('${ToDo.tittle} - ${ToDo.text}');
}

//objeto pasado como parámetro al llama a la funcion "myObject"
myObject(
    {tittle: 'Eat Dinner', text: 'Jorem'}
)