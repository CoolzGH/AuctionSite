using System;

public class Lot
{
    public int ID { get; set; }
    public int StartPrice { get; set; }
    public int BlitzPrice { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public DateTime DatePlacement { get; set; }
    public int OwnerID { get; set; }
    public Owner Owner { get; set; }
    public int CotegoryID { get; set; }
    public Category Cotegory { get; set; }
}