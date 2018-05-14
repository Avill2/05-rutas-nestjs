import {Get, Controller, Req, Res} from '@nestjs/common';

const fs =require("fs");
@Controller()
export class AppController {
    @Get('home')
    root(@Req() request, @Res() response) {
        let generalcontent='';
        let contenidoFooter = '';

        let contenidoHeader=fs.readFile(__dirname + '/html/header.html', 'utf8',(error, contenidoDelArchivoHeader) => {
                if (error) {
                    return response.send('Error');
                } else {
                    contenidoHeader = contenidoDelArchivoHeader;

                    let contenidoContenido=fs.readFile(__dirname + '/html/contenido.html', 'utf8',(error, contenidoDelArchivoContenido) => {
                            if (error) {
                                return response.send('Error');
                            } else {
                                contenidoContenido = contenidoDelArchivoContenido;
                                fs.readFile(__dirname + '/html/Footer.html', 'utf8', (error, contenidoDelArchivoFooter) => {
                                        if (error) {
                                            return response.send('Error');
                                        } else {
                                            contenidoFooter = contenidoDelArchivoFooter;
                                            generalcontent=generalcontent+contenidoFooter;
                                            //contenidoFooter=contenidoFooter.replace('{{}}');
                                        }
                                    }
                                );

                            }
                        }
                    );
                }
            }
        );
        let preguntas=fs.readFile(__dirname +   'html/preguntasFrecuentes.html', 'utf8', (error, contenidoPreguntas ) => {
            if (error) {
                return response.status(500).send('Error');
            } else {
                preguntas = contenidoPreguntas;
                return response.send(preguntas);
            }
        });
// '/html/header.html','/html/contenido.html',



}
}