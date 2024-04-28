using BackArniway.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace BackArniway.Controllers
{

    [ApiController]
    [Route("v1/")]
    public class SupplierControler : ControllerBase
    {
        private AppDbContext _appDbContext;

        public SupplierControler(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        [Route("createSupplier")]
        public async Task<IActionResult> CreateSupplier([FromBody] Supplier supplier)
        {
            if (supplier != null)
            {
                _appDbContext.Add(supplier);
                await _appDbContext.SaveChangesAsync();
                return Ok(supplier);
            }
            return NoContent();
        }

        [HttpGet]
        [Route("getSupplierById/{id}")]
        public async Task<IActionResult> GetSupplierById(int id)
        {
            if (id > 0)
            {
                Supplier? supplierEncountered = await _appDbContext.Suppliers.FindAsync(id);
                if (supplierEncountered != null)
                {
                    return Ok(supplierEncountered);
                }
                return NotFound();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("getAllSuppliers")]
        public async Task<IActionResult> GetAllSuppliers()
        {
            var TotalSuppliers = await _appDbContext.Suppliers.ToListAsync();
            return Ok(TotalSuppliers);
        }

        [HttpPut]
        [Route("updateSupplierById/{id}")]
        public async Task<IActionResult> UpdateSupplierById(int id, [FromBody] Supplier supplier)
        {
            if (supplier != null)
            {
                Supplier? supplierEncounteredForUpdate = await _appDbContext.Suppliers.FindAsync(supplier.id);
                if (supplierEncounteredForUpdate != null)
                {
                    supplierEncounteredForUpdate.name = supplier.name;
                    supplierEncounteredForUpdate.cnpj = supplier.cnpj;
                    supplierEncounteredForUpdate.email = supplier.email;
                    supplierEncounteredForUpdate.legalRepresentative = supplier.legalRepresentative;
                    supplierEncounteredForUpdate.phone = supplier.phone;
                    supplierEncounteredForUpdate.SupplierType = supplier.SupplierType;

                    await _appDbContext.SaveChangesAsync();
                    return Ok(supplierEncounteredForUpdate);
                }
                return NotFound();
            }
            return BadRequest();

        }

        [HttpDelete]
        [Route("deleteSupplier/{id}")]
        public async Task<IActionResult> DeleteSupplierById(int id)
        {
            Supplier? supplierEncountered = await _appDbContext.Suppliers.FindAsync(id);
            if (supplierEncountered != null)
            {
                _appDbContext.Suppliers.Remove(supplierEncountered);
                await _appDbContext.SaveChangesAsync();
                return NoContent();
            }
            return NotFound();
        }
    }
}