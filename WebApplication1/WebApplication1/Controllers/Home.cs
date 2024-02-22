using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    { 
        
            private readonly DbConnection db;

            public HomeController(DbConnection _db)
            {
                db = _db;
            }

            [HttpGet]
            [Route("getAllNumber")]
            public async Task<IEnumerable<ListTable>> getAllNumber()
            {
                return await db.AllNumber.ToListAsync();
            }

            [HttpPost]
            [Route("AddAllNumber")]
            public async Task<ListTable> AddAllNumber(ListTable bodyData)
            {
                db.AllNumber.Add(bodyData);
                await db.SaveChangesAsync();
                return bodyData;
            }

          
        }
}
