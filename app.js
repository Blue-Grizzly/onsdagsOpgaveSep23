import * as member from "./constructors/members.js";
import * as result from "./constructors/results.js";

main();

async function main() {
  await buildMembersList();
  displayMembers(members);
  await buildResultsList();
  results.sort((a,b)=> a.time.localeCompare(b.time));
  //incorrect way of getting correct sorting
  displayResults(results);
}

const members = [];
const results = [];

async function fetchMembers() {
  const resp = await fetch("./data/members.json");
  const data = await resp.json();
  return data;
}

async function buildMembersList() {
  const membersJson = await fetchMembers();

  for(const orgobj of membersJson) {
    const memberObj = member.construct(orgobj);
    members.push(memberObj);
  }
}

async function fetchResults() {
    const resp = await fetch("./data/results.json");
    const data = await resp.json();
    return data;
  }

  
  async function buildResultsList(){
    const resultsJson = await fetchResults();
    for (const object of resultsJson) {
        const resultObject = result.construct(object);
        resultObject.matchMember(members);
        results.push(resultObject);
    }
}



function displayMembers(members) {
  const table = document.querySelector("table#members tbody");
  table.innerHTML = "";
  for(const member of members) {
    const html = /*html*/`
    <tr>
      <td>${member.name}</td>
      <td>${activeString(member.active)}</td>
      <td>${member.birthday}</td>
      <td>${member.age}</td>
      <td>${member.group}</td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  }
}


function displayResults(results) {
    const table = document.querySelector("table#results tbody");
    table.innerHTML = "";
    for(const result of results) {
      const html = /*html*/`
      <tr>
        <td>${result.date}</td>
        <td>${result.member.name}</td>
        <td>${disciplineToDanish(result.discipline)}</td>
        <td>${trainingString(result.training)}</td>
        <td>${result.time}</td>
      </tr>`;
  
      table.insertAdjacentHTML("beforeend", html);
    }
  }

function trainingString(boolean){
  if(boolean){
      return "Træning";
  } else{
      return "Konkurrence"
  }
}


function disciplineToDanish(discipline){
  if(discipline === "breaststroke"){
      return "Bryst"
  } else if (discipline === "backstroke"){
      return "Ryg"
  } else{
      //rest use same words in english and danish so translation is redundant
      //so i just capitalize the first letter instead
      return discipline.charAt(0).toUpperCase() + discipline.slice(1);
  }
} 

function activeString(boolean){
  if(boolean === true){
    return "Aktiv"
  } else{
    return "Passiv"
  }
}