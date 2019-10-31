/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const entry = document.querySelector('.cards')
// // axios.get("https://api.github.com/users/spencer-mcguire")
//   .then(results =>{
//     // console.log(results);
//     const newCard = cardCreator(results.data)
//     entry.appendChild(newCard)
//   });
  // .catch(error => {
  //   console.log('The data was not returned', error)
  // });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

// const entry = document.querySelector('.cards')

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['taterntots','phil-mac', 'wsu718', 'squashgray', 'ArianaShackelford'];

const entry = document.querySelector('.cards')
followersArray.forEach(user => {
      axios.get(`https://api.github.com/users/${user}`)
      .then(results =>{
      // console.log(results);
      const newCard = cardCreator(results.data)
      entry.appendChild(newCard)
  });
});
.catch(err => {
  console.log('data was not returned', err);
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function cardCreator(arg){
  // create
  const card = document.createElement('div'); 
  const userImg = document.createElement('img');
  const infoContainer = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const proLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // class 
  card.classList.add('card');
  infoContainer.classList.add('card-info');
  name.classList.add('name')
  userName.classList.add('username')
  // structure
  card.appendChild(userImg);
  card.appendChild(infoContainer);
  infoContainer.appendChild(name);
  infoContainer.appendChild(userName);
  infoContainer.appendChild(location);
  infoContainer.appendChild(profile);
  profile.append(proLink);
  infoContainer.appendChild(followers);
  infoContainer.appendChild(following);
  infoContainer.appendChild(bio);

  // content
  userImg.src = arg.avatar_url;
  name.textContent = arg.name;
  userName.textContent = arg.login;
  location.textContent = `Location: ${arg.location}`;
  profile.textContent = `Profile:`; 
  // proLink.href = arg.html_url;
  proLink.textContent = arg.html_url;
  followers.textContent = `Followers: ${arg.followers}`;
  following.textContent = `Following: ${arg.following}`;
  bio.textContent = `Bio: ${arg.bio}`;

  return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/