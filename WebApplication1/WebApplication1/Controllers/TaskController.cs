using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models; 

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        //private readonly MalihaDBContext db;

        //public TaskController(MalihaDBContext db)
        //{
        //    this.db = db;
        //}  
        //[HttpGet]
        //[Route("GetTable")]
        //public async Task<IEnumerable<ListTable>> GetTables()
        //{
        //    return await db.ListTables.ToListAsync();
        //}

        //[HttpPost]
        //[Route("AddTable")]
        //public async Task<ListTable> AddTable(ListTable objTable)
        //{
        //    db.ListTables.Add(objTable);
        //    await db.SaveChangesAsync();
        //    return objTable;
        //}

        //[HttpPatch]
        //[Route("UpdateTable")]
        //public async Task<ListTable> UpdateTable(ListTable objTable)
        //{
        //    db.Entry(objTable).State = EntityState.Modified;
        //    await db.SaveChangesAsync();
        //    return objTable;
        //}

        //[HttpDelete]
        //[Route("DeleteTable/{id}")]
        //public bool DeleteTable(int id)
        //{
        //    bool a = false;
        //    var Table = db.ListTable.Find(id);
        //    if (Table != null)
        //    {
        //        a = true;
        //        db.Entry(Table).State = EntityState.Deleted;
        //        db.SaveChanges();
        //    }
        //    else
        //    {
        //        a = false;
        //    }
        //    return a;

        //}


        //[HttpPost]
        //public IActionResult SaveMaster([FromBody] ListTable model)
        //{
        //    try
        //    {
        //        bool isSaved = repo.Save(model);

        //        if (isSaved)
        //        {
        //            return Ok("Data saved successfully");
        //        }
        //        else
        //        {
        //            return BadRequest("Failed to save data");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        //    }
        //}
    }
}
