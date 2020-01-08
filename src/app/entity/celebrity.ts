export class Celebrity
{
    id:number;
    firstName:string;
    lastName:string;
    profession:string;
    profile:any;
  constructor()
  {

  }

  setId(id:number)
  {
      this.id=id;
  }

  getId()
  {
      return this.id;
  }

  setFirstName(firstName:string)
  {
      this.firstName = firstName;
  }

  getFirstName()
  {
      return this.firstName;
  }

  setLastName(lastName:string)
  {
      this.lastName = lastName;
  }

  getLastName()
  {
      return this.lastName;
  }
  setProfession(profession:string)
  {
      this.profession = profession;
  }

  getProfession()
  {
      return this.profession;
  }
  setProfile(profile:any)
  {
      this.profile = profile;
  }

  getProfile()
  {
      return this.profile;
  }
 
}
