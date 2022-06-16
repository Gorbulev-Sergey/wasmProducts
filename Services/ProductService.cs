using wasmProducts.Models;

namespace wasmProducts.Services
{
    public class ProductService
    {
        List<product> products = new List<product> {
            new product{
                title="Молоко",
                description="",
                image="https://www.1000listnik.ru/wp-content/uploads/2016/06/moloko-v-kuvshine-i-stakane.jpg",
                count=10,
                price=100.50
            }
        };

        public List<product> get() => products;
    }
}
