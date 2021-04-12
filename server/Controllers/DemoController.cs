using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class DemoController : ControllerBase
    {
        private ApplicationContext db;
        public DemoController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Lot>> Get()
        {
            return db.Lots.ToList();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public ActionResult<Lot> Get(int id)
        {
            var lot = db.Lots.FirstOrDefault(x => x.ID == id);
            if (lot == null)
            {
                return NotFound();
            }
            return new ObjectResult(lot);
        }

        // POST api/users
        [HttpPost]
        public ActionResult<Lot> Post(Lot lot)
        {
            if (lot == null)
            {
                return BadRequest();
            }

            db.Lots.Add(lot);
            db.SaveChanges();
            return Ok(lot);
        }

        [HttpPut("{id}")]
        public ActionResult<Lot> Put(int id, Lot lot)
        {
            if (lot == null)
            {
                return BadRequest();
            }

            var lotInDb = db.Lots.FirstOrDefault(x => x.ID == id);
            if (lotInDb == null)
            {
                return NotFound();
            }
            lotInDb.Name = lot.Name;
            lotInDb.Description = lot.Description;
            lotInDb.StartPrice = lot.StartPrice;
            lotInDb.BlitzPrice = lot.BlitzPrice;
            lotInDb.DatePlacement = lot.DatePlacement;
            db.SaveChanges();
            return Ok(lot);
        }

        [HttpDelete("{id}")]
        public ActionResult<Lot> Delete(int id)
        {
            Lot lot = db.Lots.FirstOrDefault(x => x.ID == id);
            if (lot == null)
            {
                return NotFound();
            }
            db.Lots.Remove(lot);
            db.SaveChanges();
            return Ok(lot);
        }

    }
}