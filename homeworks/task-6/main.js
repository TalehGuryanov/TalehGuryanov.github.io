'use strict'

const container = document.getElementsByClassName('container')[0];
let maleUsers = [];
let femaleUsers = [];
const requestForUsers = function(success, error, url){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', "https://randomuser.me/api/?results=3&gender" + url);
  xhr.onreadystatechange = function(){

    if(this.readyState == 4){
      if (xhr.status >= 200 && xhr.status < 300){
        success((JSON.parse(xhr.response)));
      } else{
        error({
          code: xhr.status,
          message: xhr.responseText
        });   
      }
    }
  }

  xhr.send();
};

requestForUsers(
  function(x){
    console.log(x);
    maleUsers = x.results;
    if(maleUsers.length && femaleUsers.length){
      getUsersData()
    }
  },
  function(y){
    console.log(y);
  },
  "=female"
);

requestForUsers(
  function(x){
    console.log(x);
    femaleUsers = x.results;
    if(maleUsers.length && femaleUsers.length){
      getUsersData()
    }
  },
  function(y){
    console.log(y);
  },
  "=male"
);


let getUsersData = function(){
  let allUsers = maleUsers.concat(femaleUsers);
  const ul = document.createElement('ul');
  ul.classList.add('inner_list')

  for(let key of allUsers){
    const li = document.createElement('li');

    li.classList.add('list_item');

    li.innerHTML = `
      <div class="list_content">
        <div class="user_img">
          <img class="img" src="${key.picture.large}" alt="User Image">
        </div>
        <div class="user_data">
          <h4>Hi, My name is</h4>
          <p class="user_name"> ${key.name.first} ${key.name.last}</p>
          <a class="user_email" href="#">${key.email}</a>
        </div>
      </div>`;
    ul.appendChild(li);
  }
  container.appendChild(ul);
}