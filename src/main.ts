import { ConfigService } from '@nestjs/config'; // Import ConfigService from NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get(ConfigService);  // Use ConfigService properly
  const appName = appConfig.get<string>('APP_NAME');
  const appPort = appConfig.get<number>('APP_PORT') || 3001;

  console.log(`Application Name: ${appName}`);  // Output the app name
  console.log(`Application is running on port: ${appPort}`);

  await app.listen(appPort);  // Listen on the specified port
  console.log(`Application is running on: ${await app.getUrl()}`);  // Log the app URL
}

bootstrap();
