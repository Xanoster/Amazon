import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products,getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions,getDeliveryOption} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

// Render the entire order summary
export function renderOrderSummary() {
  
    let cartSummaryHTML = '';

    // Set the current date once outside the loop
    const today = dayjs();

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        // Find the matching product
         let matchingProduct=getProduct(productId);

        // Get the selected delivery option for this cart item
        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption=getDeliveryOption(deliveryOptionId);

        // Calculate the delivery date based on the delivery option days
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const formattedDeliveryDate = deliveryDate.format('dddd, MMMM D');

        // Add the cart item details
        cartSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                  Delivery date: ${formattedDeliveryDate}
                </div>

                <div class="cart-item-details-grid">
                  <img class="product-image" src="${matchingProduct.image}">

                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingProduct.name}
                    </div>
                    <div class="product-price">
                      $${formatCurrency(matchingProduct.priceCents)}
                    </div>
                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary">Update</span>
                      <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
                    </div>
                  </div>

                  <div class="delivery-options">
                    <div class="delivery-options-title">Choose a delivery option:</div>
                    ${deliveryOptionsHTML(matchingProduct, cartItem)}
                  </div>
                </div>
              </div>`;
    });

    // Insert the cart summary HTML into the order summary section
    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

    // Add event listeners to delete buttons
    document.querySelectorAll('.js-delete-link').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
            renderPaymentSummary();
        });
    });

    // Add event listeners to delivery option radio buttons
    document.querySelectorAll('.js-delivery-option').forEach((element) => {
        element.addEventListener('click', () => {
            const productId = element.dataset.productId;
            const deliveryOptionId = element.dataset.deliveryOptionId;
            
            // Update the delivery option in the cart for this product
            updateDeliveryOption(productId, deliveryOptionId);
            renderPaymentSummary();
            renderOrderSummary();
        });
    });
}

// Function to generate delivery options for each product
function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)}`;

        // Check if this delivery option is the one selected for this cart item
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

        html += `
            <div class="delivery-option js-delivery-option"
            data-product-id="${matchingProduct.id}"
            data-delivery-option-id="${deliveryOption.id}">
                <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">${dateString}</div>
                    <div class="delivery-option-price">${priceString} - Shipping</div>
                </div>
            </div>`;
    });

    return html;
}
