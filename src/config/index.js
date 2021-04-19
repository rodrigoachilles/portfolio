const isDev = process.env.NODE_ENV !== 'production';

const server = isDev ? 'http://localhost:3000' : 'https://rodrigo-achilles.vercel.app';
export default server;
