function submit(){
    const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0NSwiZ2VuZXJhdGVkX29uIjoiMjAyNC0wNC0wMVQwNToxNTo0MS44ODI4ODRaIn0.iff_4roBYwrn73k8jNJhBj6fOzEXf4l0bKSWzHddu8M`
    const data = document.getElementById('data-in').value;
    const url = `https://indianpincodes.co.in/api/pincode/${data}`;
    fetch(url,{
        method: 'GET',
	    headers: {
		'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
		
    }
    })
    .then(response => response.json())
    .then(json => document.getElementById('state').innerHTML = `City:${JSON.stringify(json.city)} and State:${JSON.stringify(json.state)}`)
    
    

  }

// function submit() {
    
//         alert("hey")
    
// }