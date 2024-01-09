# Installation
This guide will walk you through how to install and run the project locally.
> 🔴 **Prerequisites**: You need to have Node.js and Git installed on your machine to install and run the project. If you want to have a functioning contact form, you will also need a Gmail account with 2-FA enabled and a reCaptcha-v3 API key.

Clone repository:
```bash
git clone git@github.com:creme332/portfolio.git
```
Navigate to the project and install dependencies:
```bash
cd portfolio
npm install
```
Create a `.env.local` file in the root directory:
```
EMAIL=
PASSWORD=
API_KEY=
```
Fill in the blanks where `EMAIL` is your Gmail address, `PASSWORD` is an app password (different from your gmail password) for your Gmail account, and `API_KEY` is your reCaptcha-v3 API key.

>  🟢 **Tip**: For instructions on how to create an app password see [this](https://support.google.com/mail/answer/185833?hl=en) and for instructions on how to create a reCaptcha-v3 API key see [this](https://cloud.google.com/recaptcha-enterprise/docs/create-key-website).

> 🟡 **Warning**: For security reasons, do **not** use your actual gmail password for `PASSWORD`.