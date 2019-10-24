import app from './app';

app.listen(9000, () => {
  console.log(`Listening on host: ${process.env.APP_URL}`);
});
