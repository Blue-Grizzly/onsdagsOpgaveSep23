export const resultRender ={
    render(result){
        const html = /*html*/`
        <tr>
            <td>${result.date}</td>
            <td>${result.member.name}</td>
            <td>${disciplineTranslate[result.discipline]}</td>
            <td>${trainingString(result.training)}</td>
            <td>${result.time}</td>
        </tr>`;
        return html
        }
      }

function trainingString(boolean){
  if(boolean){
      return "Træning";
  } else{
      return "Konkurrence"
  }
}

const disciplineTranslate = {
    "breaststroke": "Bryst",
    "backstroke": "Ryg",
    "freestyle": "Fristil",
    "butterfly": "Butterfly"
}