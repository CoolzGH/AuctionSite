using System.Collections.Generic;

public class Category 
{
    public int ID {get; set;}
    public string Name {get; set;}

    public List<Lot> Lots {get; set;} 
}