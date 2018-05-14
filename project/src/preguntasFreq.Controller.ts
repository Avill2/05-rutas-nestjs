import {Get, Controller, Req, Res, HttpCode, Post} from '@nestjs/common';
@Controller()
export class PreguntasFreqController{
    preguntas ={
        pregunta: String,
        respuesta: String
    };

    preguntaRespuesta=[];
    @HttpCode(200)
    @Get('mostrar')
    mostrarPreguntaRespuesta(){
        return this.preguntaRespuesta;
    }

    @Post('crearPreguntaRespuesta')crear(
        @Req() request,
        @Res() response
    ){
        const nuevaPreguntRespuesta ={
            pregunta:request.query.pregunta,
            respuesta:request.query.respuesta
        };
        this.preguntaRespuesta.push(nuevaPreguntRespuesta);

        return response.status(200).send(this.preguntaRespuesta);
    }

}