import * as member from "./constructors/members.js";
import * as result from "./constructors/results.js";
import { initTabs } from "./tabs.js";
import * as listRenderer from "./ListRenderer.js"
import { memberRender } from "./member_renderer.js";
import { resultRender } from "./result_render.js";

main();

let members = [];
let results = [];

async function main() {
  initTabs();
  await buildMembersList();
  const memberList = listRenderer.construct(members, "table#members tbody", memberRender);
  memberList.render();
  await buildResultsList();
  const resultList = listRenderer.construct(results, "table#results tbody", resultRender);
  resultList.render();
}

async function fetchMembers() {
  const resp = await fetch("./data/members.json");
  const data = await resp.json();
  return data;
}

async function buildMembersList() {
  const membersJson = await fetchMembers();
  members = membersJson.map(member.construct);
}

async function fetchResults() {
    const resp = await fetch("./data/results.json");
    const data = await resp.json();
    return data;
  }

  
  async function buildResultsList(){
    const resultsJson = await fetchResults();
    results = resultsJson.map(result.construct);
}
