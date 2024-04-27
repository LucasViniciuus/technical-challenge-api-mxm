using BackArniway.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace BackArniway.Controllers
{
    [ApiController]
    [Route("v1/")]
    public class ProductController : ControllerBase
    {
        private AppDbContext _appDbContext;

        public ProductController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        [HttpGet]
        [Route("getAllProducts")]
        public async Task<IActionResult> GetAllProducts()
        {
            var Totalproducts = await _appDbContext.product.ToListAsync();
            return Ok(Totalproducts);
        }
    }
}