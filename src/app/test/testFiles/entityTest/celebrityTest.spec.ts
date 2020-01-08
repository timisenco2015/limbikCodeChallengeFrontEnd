import{Celebrity} from '../../../entity/celebrity';


describe('Entity Celebrity', () => 
{
    let celebrity: Celebrity;
  
    // test to check if class can be instantiated
    it('should create', async() => 
    {
      celebrity = new Celebrity();
      expect(celebrity).toBeTruthy();
    }) 

    // test all class methods (sets and gets)
    it('should test class methods A', async() => 
    {
      celebrity = new Celebrity();
      celebrity.setFirstName("John")
      expect(celebrity.getFirstName()).toEqual("John");

      celebrity.setLastName("Terry")
      expect(celebrity.getLastName()).toEqual("Terry");
        
      celebrity.setProfession("Footballer")
      expect(celebrity.getProfession()).toEqual("Footballer"); 
    });

    // test all class methods (sets and gets)
    it('should test class methods B', async() => 
    {
      celebrity = new Celebrity();
      celebrity.setFirstName("Frank")
      expect(celebrity.getFirstName()).toEqual("Frank");
  
      celebrity.setLastName("Lampard")
      expect(celebrity.getLastName()).toEqual("Lampard");
  
      celebrity.setProfession("Footballer")
      expect(celebrity.getProfession()).toEqual("Footballer");

    });


});
  