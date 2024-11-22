# Installation

This guide will walk you through how to install and run the project locally.

## Prerequisites

- Node.js
- Git 
- A Gmail account with 2-FA enabled
- A reCaptcha-v3 API key. See instructions from [Google Cloud](https://cloud.google.com/recaptcha-enterprise/docs/create-key-website).

> [!TIP]
>  The reCaptcha-v3 API key is optional if you do not plan on making your contact form functional.

## Instructions

Clone the repository:

```bash
git clone git@github.com:creme332/portfolio.git
```

Navigate to the root directory and install all dependencies:

```bash
cd portfolio
npm install
```

In the root directory create a `.env.local` file with the following contents:
```
EMAIL=
PASSWORD=
API_KEY=
```

Fill in the blanks where `EMAIL` is your Gmail address, `PASSWORD` is an app password (different from your gmail password) for your Gmail account, and `API_KEY` is your reCaptcha-v3 API key. For instructions on how to create an app password see [this](https://support.google.com/mail/answer/185833?hl=en).

> [!CAUTION]
> For security reasons, do **not** use your actual gmail password in the `PASSWORD` field.