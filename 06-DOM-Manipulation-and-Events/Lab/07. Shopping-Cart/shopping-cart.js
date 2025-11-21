document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let products = new Set();
   let totalPrice = 0;

   const allAddBtnEls = document.querySelectorAll('.add-product');
   const resultTextAreaEl = document.querySelector('textarea');
   const checkOutBtnEl = document.querySelector(".checkout");
   
   for (const addBtnEl of allAddBtnEls) {
      addBtnEl.addEventListener('click', handleAddProduct);

   }

   checkOutBtnEl.addEventListener('click', handleCheckoutProduct);

   function handleAddProduct(e) {
      const fullProductDivEL = e.target.parentElement.parentElement;
      const productTitleDivEl = fullProductDivEL.querySelector('.product-title');
      const productTitle = productTitleDivEl.textContent;
      products.add(productTitle);

      const productPriceDivEl = fullProductDivEL.querySelector('.product-line-price');
      const productPrice = Number(productPriceDivEl.textContent);
      totalPrice += productPrice;

      resultTextAreaEl.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
   };

   function handleCheckoutProduct(e) {
      const productsArr = Array.from(products);
      resultTextAreaEl.value += `You bought ${productsArr.join(", ")} for ${totalPrice.toFixed(2)}.`;

      checkOutBtnEl.disabled = true;
      for (addBtnEl of allAddBtnEls) {
         addBtnEl.disabled = true;
      };
   };
}
