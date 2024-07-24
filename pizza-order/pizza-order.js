/// <reference path="./global.d.ts" />
//
// @ts-check

const COSTS = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
    ExtraSauce: 1,
    ExtraToppings: 2
}

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...[extra, ...extras]) {
    let cost = COSTS[pizza];

    for (var extra of extras)
        cost += COSTS[extra];

    return cost;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
    let cost = 0;
    for (var order of pizzaOrders)
        cost += pizzaPrice(order.pizza, ...order.extras);

    return cost;
}
