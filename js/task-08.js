const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены!");  	
        return false;
    } else {
        const formData = new FormData(event.currentTarget);
        const formResult = Object.fromEntries(formData.entries());

 //       formData.forEach((value, name) => {
 //           console.log('name:', name, 'value:', value); 
 //       });
        
        console.log(formResult);
        event.currentTarget.reset();
    }
    
}