document.addEventListener('DOMContentLoaded', ()=>{
    let animalButton = document.querySelector('#animal');
    animalButton.addEventListener('click', (event) =>{
        event.preventDefault();
        displayAnimal();

    let numberBtn = document.querySelector('#numberBtn');
    numberBtn.addEventListener('click', (event)=>{
        console.log('clicked')
        event.preventDefault();
        displayNumber();
    })

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

const displayNumber = async () =>{
    const floorQuery = document.querySelector('#number1');
    const ceilingQuery = document.querySelector('#number2');

    const randomNumServer = `http://localhost:2300/random?ceil=${ceilingQuery}&floor=${floorQuery}`;

    await axios
            .get(randomNumServer)
            .then((response=>{
                console.log(response)
                let result = response.data

                displayContent(result)
            }))

}

const displayContent = (result) =>{
    let contentDiv = document.querySelector('div');
    let content = document.createElement('p');
    content.innerText = result;
    contentDiv.appendChild(content)
}