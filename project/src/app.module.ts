import {Module, NestModule} from '@nestjs/common';
import {InicioController} from "./inicio.controller";
import {PreguntasFreqController} from './preguntasFreq.Controller';



@Module({
    imports: [ // OtrosModulos
    ],
    controllers: [ // Controladores
        InicioController,
        PreguntasFreqController
    ],
    components: [],
})
export class AppModule {

}
