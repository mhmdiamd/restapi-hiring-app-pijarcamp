<br />
<p align="center">
<div align="center">
<img height="150" src="./documentation/logo.png" alt="YuGawe" border="0"/>
</div>
  <h3 align="center">Backend YuGawe</h3>
  <p align="center">
    <a href="https://github.com/mhmdiamd/restapi-hiring-app-pijarcamp"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://restapi-hiring-app-pijarcamp-production.up.railway.app/api/v1/">View Demo</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Setup .env example](#setup-env-example)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

YuGawe is a jobseeker website project that aims to assist Software Developers in finding jobs that match their skills. The name YuGawe comes from the Javanese language, meaning "Let's Work".

On this website, job seekers can create a profile, upload their experience and portfolio. YuGawe also offers a feature to connect job seekers with companies that are looking for candidates with the required skills.

One of the outstanding features of YuGawe is the ability to identify the skills and interests of job seekers based on their abilities. With this information, recruiters can directly connect through the hire feature.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [Prisma ORM](https://prisma.io/)
- and other


<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [nodejs](https://nodejs.org/en/download/)


| Thrid Party     | npm install         |
| --------------- | ------------------- |
| [Express]       | npm i express       |
| [Nodemon]       | npm i nodemon       |
| [Morgan]        | npm i morgan        |
| [PostgresSQL]   | npm i pg            |
| [Dotenv]        | npm i dotenv        |
| [CORS]          | npm i cors          |
| [Eslint]        | npm i eslint        |
| [Joi]           | npm i joi           |
| [jsonwebtoken]  | npm i jsonwebtoken  |
| [cookie-parser] | npm i cookie-parser |
| [googleapis]    | npm i googleapis    |
| [nodemailer]    | npm i nodemailer    |
| [prisma]        | npm i --save-dev prisma    |
| [@prisma/client]        | npm i @prisma/client   |
| [nodemailer]    | npm i nodemailer    |

[express]: http://expressjs.com
[nodemon]: https://www.npmjs.com/package/nodemon
[morgan]: https://www.npmjs.com/package/morgan
[postgressql]: https://node-postgres.com
[dotenv]: https://www.npmjs.com/package/dotenv
[cors]: https://www.npmjs.com/package/cos
[eslint]: https://eslint.org/
[joi]: https://www.npmjs.com/package/joi
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[cookie-parser]: https://www.npmjs.com/package/cookie-parser
[googleapis]: https://www.npmjs.com/package/cookie-parser
[nodemailer]: https://www.npmjs.com/package/cookie-parser
[prisma]: https://www.npmjs.com/package/prisma
[@prisma/client]: https://www.npmjs.com/@prisma/client

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.getpostman.com/) for testing

### Installation

- Clone This Back End Repo

```
git clone https://github.com/mhmdiamd/restapi-hiring-app-pijarcamp.git
```

- Go To Folder Repo

```
cd restapi-hiring-app-pijarcamp
```

- Install Module

```
npm install
```

- Starting application

```
 npm run start:dev
```

### Setup .env example

Create .env file in your root project folder.

```env
# Postgre SQL Configuration
PG_NAME 
PG_USER 
PG_PASSWORD 
PG_PORT 
PG_HOST 
# Token Secret
ACCESS_TOKEN_SECRET  
REFRESH_TOKEN_SECRET 
EMAIL_ACTIVATION_TOKEN 
# Email User For Send Email
EMAIL_SENDER
EMAIL_SENDER_PASSWORD 
# Origin Domain 
ORIGIN_DOMAIN 
# Google Service Credentials
GOOGLE_DRIVE_TYPE
GOOGLE_DRIVE_PROJECT_ID
GOOGLE_DRIVE_PRIVATE_KEY_ID
GOOGLE_DRIVE_PRIVATE_KEY 
GOOGLE_DRIVE_CLIENT_EMAIL 
GOOGLE_DRIVE_CLIENT_ID
GOOGLE_DRIVE_AUTH_URI
GOOGLE_DRIVE_TOKEN_URI 
GOOGLE_DRIVE_AUTH_PROVIDER
GOOGLE_DRIVE_CLIENT_URL
PORT 
HOST
DRIVE_CLIENT_ID 
DRIVE_CLIENT_SECRET
```

## Endpoint List

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/23097943/2s93XyUiLm)
<!-- (https://documenter.getpostman.com/view/23292228/2s93RUvsMo) -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Related Project

:rocket: [`Backend YuGawe`](https://github.com/mhmdiamd/restapi-hiring-app-pijarcamp)

:rocket: [`Frontend YuGawe`](https://github.com/mhmdiamd/ui-hiring-app)

:rocket: [`Demo YuGawe`](https://yugawe.vercel.app/)

<!-- CONTACT -->

## Contact

My Email : darmawanilham34@gmail.com

Project Link: [https://github.com/mhmdiamd/restapi-hiring-app-pijarcamp/](https://github.com/mhmdiamd/restapi-hiring-app-pijarcamp)