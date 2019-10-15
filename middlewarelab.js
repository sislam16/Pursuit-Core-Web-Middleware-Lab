document.addEventListener('DOMContentLoaded', ()=>{
    let animalButton = document.querySelector('#animal');
    animalButton.addEventListener('click', (event) =>{
        event.preventDefault();
        displayAnimal();
        //put function that the button will execute
    })
})

const displayAnimal = async () => {
    const queryValue = document.querySelector('#animalName').value;
    const animalServer = `http://localhost:2300/animal?animal=${queryValue}`

    await axios
            .get(animalServer)
            .then((response)=>{
                console.log(response)
                let result = response.data.status

                displayContent(result)
            })
            .catch((error=>{
                console.log('Error!')
            }))
}

const displayContent = (result) =>{
    let contentDiv = document.querySelector('div');
    let content = document.createElement('p');
    content.innerText = result;
    contentDiv.appendChild(content)
}