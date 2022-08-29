const loadUsers = () =>{
    console.log('ami vat khaici')
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data =>displayUsers(data.results))
}
loadUsers()

const displayUsers= users =>{
    const usersContainer =document.getElementById('users-containers');
  for(const user of  users){
    console.log(user);
    const userDiv=document.createElement('div');
   userDiv.classList.add('user');
    userDiv.innerHTML=`
    <h3>User Name</h3>
    <p>Email:${user.email}</p>
    <p>user location:${user.location.city} ${user.location.country}</p>
    `;
    usersContainer.appendChild(userDiv);
  }
}