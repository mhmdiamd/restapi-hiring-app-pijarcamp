import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import errorMiddleware from './src/Middlewares/error.middleware.js'

class App {

  constructor(routers, port) {
    this.app = express();
    this.port = port;

    this.#initialiseMiddleware();
    this.#initialiseRouters(routers);
    this.#initialiseErrorHandling();
  }

  #initialiseMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({origin: process.env.ORIGIN_DOMAIN, credentials: true}));
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(xss());
    this.app.use(cookieParser());    
  }

  #initialiseErrorHandling() {
    this.app.use(errorMiddleware);
    this.app.use((req, res, next) => {
      res.status(404).json({
        message: 'Routes not found!',
      });
    });
  }

  // Initialise Roter
  #initialiseRouters(routers) {
    routers.forEach((router) => {
      this.app.use('/api/v1', router.router);
    });
  }

  // Lister Server
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on port ${this.port}`);
    });
  }
}

export default App;
