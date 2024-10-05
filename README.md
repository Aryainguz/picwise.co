# PicWise.co

PicWise is an innovative image optimization tool built on Next.js 14, empowering users to effortlessly enhance and compress images for optimal web performance and stunning visual impact.

![picwise Demo](https://github.com/Aryainguz/picwise/blob/main/public/assets/picwise-home.png)

## Features

- **Effortless Image Compression:** Quickly reduce image sizes without compromising quality.
- **AI-Enhanced Editing:** Utilize advanced AI algorithms to enhance image clarity and detail.
- **Responsive Design:** Enjoy a seamless user experience across devices.

## Getting Started

To get started with picwise, follow these steps:

### Non-Docker Setup

1. Clone this repository: `git clone https://github.com/Aryainguz/picwise.git`
2. Navigate into the project directory: `cd picwise`
3. Install dependencies: `npm install`
4. To obtain API keys, visit the official Clerk website, create a new application, and enable Google and Email authentication methods. Once done, copy the generated API keys and add them to your `.env.local` file, following the format provided in the `.env.example` file for correct configuration.
5. Run the development server: `npm run dev`

### Docker Setup

1. Clone this repository: `git clone https://github.com/Aryainguz/picwise.git`
2. Navigate into the project directory: `cd picwise`
3. To obtain API keys, visit the official Clerk website, create a new application, and enable Google and Email authentication methods. Once done, copy the generated API keys and add them to your `.env.local` file, following the format provided in the `.env.example` file for correct configuration.
4. Install dependencies: `docker build -t picwise-app .`
5. Run the Docker container: `docker run -d --name picwise-app -p 3000:3000 --env-file .env.local picwise-app`
6. If you need to stop the Docker container, you can use: `docker stop picwise-app`
7. To remove the container after stopping it, run: `docker rm picwise-app`

## Contributing

Contributions are welcome! Feel free to create issues and wait for getting assigned by admin to start contributing. Adding relevant changes are appreciated as per the application's theme.

## License

This project is licensed under the terms of the [MIT License](LICENSE).
