using System;
using Microsoft.EntityFrameworkCore;
 
namespace Server.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Lot> Lots { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Category> Owners { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            var created = Database.EnsureCreated();   // создаем базу данных при первом обращении
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var firstCat = new Category {ID = 1, Name = "First"};
            var secondCat  = new Category {ID = 2, Name = "Second"};
            modelBuilder.Entity<Category>().HasData(
                firstCat,
                secondCat
            );

            var firstOwn = new Owner {ID = 1, Name = "Egor", Email = "egorK@gmail.com", Rating = 0,};
            var secondOwn  = new Owner {ID = 2, Name = "Max", Email = "maxZ@gmail.com", Rating = 0,};
            modelBuilder.Entity<Owner>().HasData(
                firstOwn,
                secondOwn
            );

            modelBuilder.Entity<Lot>().HasData(
                new Lot {ID = 1, StartPrice = 200, BlitzPrice = 5000,  Name = "Name1", 
                Description = "Description1", DatePlacement = new DateTime(2011, 6, 10), OwnerID = 1, CotegoryID = 1},

                new Lot {ID = 2, StartPrice = 412, BlitzPrice = 1224,  Name = "Name2", 
                Description = "Description2", DatePlacement = new DateTime(2012, 12, 2), OwnerID = 2, CotegoryID = 2}
            );
            
        }
    }
}