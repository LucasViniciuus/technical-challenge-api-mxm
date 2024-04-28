using BackArniway.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
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

        [HttpPost]
        [Route("createProduct")]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        {
            if (product != null)
            {
                _appDbContext.Add(product);
                await _appDbContext.SaveChangesAsync();
                return Ok(product);
            }
            return NoContent();
        }

        [HttpGet]
        [Route("getProductById/{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            if (id > 0)
            {
                Product? productEncountered = await _appDbContext.Products.FindAsync(id);
                if (productEncountered != null)
                {
                    return Ok(productEncountered);
                }
                return NotFound();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("getAllProducts")]
        public async Task<IActionResult> GetAllProducts()
        {
            var Totalproducts = await _appDbContext.Products.ToListAsync();
            return Ok(Totalproducts);
        }

        [HttpPut]
        [Route("updateProductById/{id}")]
        public async Task<IActionResult> UpdateProductById(int id, [FromBody] Product product)
        {
            if (product != null)
            {
                Product? productEncounteredForUpdate = await _appDbContext.Products.FindAsync(product.id);
                if (productEncounteredForUpdate != null)
                {
                    productEncounteredForUpdate.name = product.name;
                    productEncounteredForUpdate.price = product.price;
                    productEncounteredForUpdate.quantity = product.quantity;
                    productEncounteredForUpdate.category = product.category;
                    productEncounteredForUpdate.status = product.status;
                    productEncounteredForUpdate.supplier = product.supplier;
                    productEncounteredForUpdate.expirationDate = product.expirationDate;
                    productEncounteredForUpdate.unitMeasure = product.unitMeasure;
                    productEncounteredForUpdate.weight = product.weight;
                    productEncounteredForUpdate.team = product.team;

                    await _appDbContext.SaveChangesAsync();
                    return Ok(productEncounteredForUpdate);
                }
                return NotFound();
            }
            return BadRequest();

        }

        [HttpDelete]
        [Route("deleteProduct/{id}")]
        public async Task<IActionResult> DeleteProductById(int id)
        {
            Product? productEncountered = await _appDbContext.Products.FindAsync(id);
            if (productEncountered != null)
            {
                _appDbContext.Products.Remove(productEncountered);
                await _appDbContext.SaveChangesAsync();
                return NoContent();
            }
            return NotFound();
        }
    }


}