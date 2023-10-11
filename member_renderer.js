export const memberRender = {
    render(member){
        // const member = this.item
        const html = /*html*/`
        <tr>
          <td>${member.name}</td>
          <td>${activeString(member.active)}</td>
          <td>${member.birthday}</td>
          <td>${member.age}</td>
          <td>${member.group}</td>
        </tr>`;

        return html
        }
      }

  function activeString(boolean){
    if(boolean === true){
      return "Aktiv"
    } else{
      return "Passiv"
    }
  }