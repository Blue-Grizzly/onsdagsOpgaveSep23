function construct(resultData){
    const ResultObject = {
        id: resultData.id,
        _date: new Date(resultData.date),
        discipline: resultData.discipline,
        memberId: resultData.memberId,
        member: {name:"404"}, //placeholder in case no member exists with given ID
        resultType: resultData.resultType,
        _time: resultData.time,
        get date(){
            return Intl.DateTimeFormat('da-DK', { dateStyle: 'long'}).format(this._date)
        },
        get training(){
            return this.resultType === "training"
        },
        get time(){
            return this._time;
        },
        set time(time){
            this._time = time;
        },
        matchMember(members){
            for (const member of members) {
                if(member.id == this.memberId){
                    this.member = member;
                }
            }
          }
    }

    Object.defineProperties(ResultObject, 
        {
          id: {
                writable: false
              },
            matchMember:{
                enumerable: false
            },
            time:{
                enumerable: false
            },
            training:{
                enumerable: false
            },
            date:{
                enumerable: false
            }
            
        }
    );

    return ResultObject;
}
export {construct};