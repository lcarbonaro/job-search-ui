// references
let btn = document.getElementById('btnSubmit');
let inp = document.querySelector('#inpCategory');

btn.addEventListener('click', async () => {
    let requestData = { jobCategory: inp.value };
    //let resp = await fetch('https://erin-eager-indri.cyclic.app/searchbycategory',{
    let resp = await fetch('http://localhost:3000/searchbycategory',{    
        method: 'POST', // *GET, POST, PUT, DELETE, etc. 
        headers: {
            'Content-Type': 'application/json'            
          },    
        body: JSON.stringify(requestData) // body data type must match "Content-Type" header
    });

    let respJson = await resp.json();

    console.log(respJson);
    
});