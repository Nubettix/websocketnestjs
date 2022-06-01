import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    async events(@MessageBody() data: any): Promise<any> {
        return { message: 'Connected to events' };
    }

    @SubscribeMessage('propagation')
    async propagation(@MessageBody() data: number): Promise<any> {
        return { message: 'Connected to propagation' };
    }
}