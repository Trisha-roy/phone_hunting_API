const loadPhone=async(searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    displayPhones(data.data)
}


const displayPhones=phones=>{
    console.log(phones)

    //show all phone basis condition
    const showAllContainer=document.getElementById('show-all-container');


    if(phones.length>5){
        showAllContainer.classList.remove('hidden')
    }else{
        showAllContainer.classList.add('hidden')
    }

    //show only 10 item phone
    phones=phones.slice(0,5)


    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent='';
    phones.forEach(phone=>{
        console.log(phone);


        //create div
        const phonecard=document.createElement('div');
        phonecard.classList='card card-compact w-96 bg-base-100 shadow-xl';
        phonecard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `
        phoneContainer.appendChild(phonecard)
    })
}

//add event handler on search button
const handleSearch=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}

const handleSearch2=()=>{
   const inputField=document.getElementById('search-field2');
   const inputText=inputField.value;
   loadPhone(searchText)
}