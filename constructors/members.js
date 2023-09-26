function construct(memberdata) {
  const MemberObject = {
    _firstName: memberdata.firstName,
    _lastName: memberdata.lastName,
    id: memberdata.id,
    active: memberdata.isActiveMember,
    competitive: memberdata.isCompetitive,
    _birthday: new Date(memberdata.dateOfBirth),
    email: memberdata.email,
    gender: memberdata.gender,
    image: memberdata.image,
    hasPayed: memberdata.hasPayed,
    get name (){
      return `${this._firstName} ${this._lastName}`
    },
    get birthday(){
      const date = this._birthday;
      return Intl.DateTimeFormat('da-DK', { dateStyle: 'long'}).format(date);
    },
    get age(){
      const birthday = this._birthday;
      return Math.floor((Date.now() - birthday) / 31556952000);
    },
    get group(){
      if(this.age < 18){
        return "Junior";
      }else {
        return "Senior";
      }
    }    
  }
  Object.defineProperties(MemberObject, 
    {
      id: {
            writable: false
          },
      name: {
          enumerable: false
          },
      image: {
        enumerable: false
          }    
    }
);
  return MemberObject;
}

export {construct};

