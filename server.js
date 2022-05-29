const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const path = require('path');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
 
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const dbo = require("./db/conn");
 
 
const receiverRoutes=require('./routes/receivers');
const morgan = require('morgan');
 
const app = express();
 
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "AVIATION FREQUENCY PROPAGATION SIMULATOR API",
      description: "This is the API documentation for the Aviation Frequency Propagation Simulator, dealing with listing, adding and deletion of new receivers",
      contact: {
        name: "samuel wanza",
        email: "s.wanza@alustudent.com"
      },
      servers: [""]
    }
  },
  // ['.routes/*.js']
  apis: ["server.js"]
};
/**
 * @swagger
 * /receivers:
 *  get:
 *    description: Use to request all receivers
 *    responses:
 *      '200':
 *        description: A successful response
 * /receivers/receiver_id:
 *  get:
 *    description: Use to request a particular receiver details
 *    responses:
 *      '200':
 *        description: A successful response
 *              
 *  
 *
 */
 
 
/**
* @swagger
* /receivers/new:
 *  post:
 *    description: recording a new receiver
 *    responses:
 *      '200':
 *        description: A successful response
*/
 
 
/**
* @swagger
* /receivers/delete/receiver_id:
*   post:
*     summary: Remove the receiver by id
*     tags: [Receivers]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The receiver id
*
*     responses:
*       200:
*         description: The post was deleted
*       404:
*         description: The post was not found
*/
 
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(express.json());
app.use(cors(corsOptions));
dbo
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/receivers',receiverRoutes)
 
app.listen(port, async () => {

  console.log(`Server is running on port: ${port}`);
  
});