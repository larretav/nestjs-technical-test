import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    // Preparar las variables de entorno
    // Configuración y validación
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    })
  ]
  
})
export class AppModule {}
