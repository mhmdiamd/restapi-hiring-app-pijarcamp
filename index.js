import App from './app.js';
import { FoodRouter } from './src/food/food.routes.js';
import { FoodCartRouter } from './src/transaction/food-cart/food-cart.routes.js';
import { TransactionRouter } from './src/transaction/transaction.routes.js';

process.setMaxListeners(0);

const app = new App([new FoodRouter(), new TransactionRouter(), new FoodCartRouter], 3001);

app.listen();
