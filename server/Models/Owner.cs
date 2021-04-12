using System.Collections.Generic;

public class Owner 
{
    public int ID {get; set;}
    public string Name {get; set;}
    public string Email {get; set;}
    public int Rating {get; set;}

    public List<Lot> Lots {get; set;} 
}