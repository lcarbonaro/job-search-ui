// references
let btn = document.getElementById('btnSubmit');
let inp = document.querySelector('#inpCategory');
let ul = document.querySelector('#ulResults');
let divMsg = document.querySelector('#divMessage');

btn.addEventListener('click', async () => {
    divMsg.innerHTML = '';  // clear any messages from previous submits

    if (inp.value.trim() === '') {
        let listItem = document.createElement('div');
        listItem.textContent = 'You must input a Job Category!';
        divMsg.appendChild(listItem);
    } else {
        let requestData = { jobCategory: inp.value.toUpperCase() };

        //let resp = await fetch('http://localhost:3000/searchbycategory',{    
        let resp = await fetch('https://erin-eager-indri.cyclic.app/searchbycategory', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc. 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData) // body data type must match "Content-Type" header
        });

        let jobRecords = await resp.json();

        //console.log(jobRecords);

        ul.innerHTML = '';  // to clear any previous results

        if (jobRecords.length > 0) {
            jobRecords.forEach((jobRecord) => {
                let { jobTitle, company } = jobRecord;
                let listItem = document.createElement('li');
                listItem.textContent = `${jobTitle} (${company})`;   // Finance Clerk (XYX Inc)
                ul.appendChild(listItem);
            });
        } else {
            /*        
            let listItem = document.createElement('li');
            listItem.textContent = 'Sorry, no jobs found in that category';
            ul.appendChild(listItem);
            */
            let listItem = document.createElement('div');
            listItem.textContent = 'Sorry, no jobs found in that category';
            divMsg.appendChild(listItem);

        }


    }










    /*
        for(let i=0; i<jobRecords.length;i++){
            let { jobTitle,company } = jobRecords[i];
            let listItem = document.createElement('li');
            listItem.textContent = `${jobTitle} (${company})`;   // Finance Clerk (XYX Inc)
            ul.appendChild(listItem);
        }
    
    
        for( jobRecord of jobRecords ) {
            let { jobTitle,company } = jobRecord;
            let listItem = document.createElement('li');
            listItem.textContent = `${jobTitle} (${company})`;   // Finance Clerk (XYX Inc)
            ul.appendChild(listItem);
        }
    
        for( ndx in jobRecords) {
            let { jobTitle,company } = jobRecords[ndx];
            let listItem = document.createElement('li');
            listItem.textContent = `${jobTitle} (${company})`;   // Finance Clerk (XYX Inc)
            ul.appendChild(listItem);
        }
    */














});