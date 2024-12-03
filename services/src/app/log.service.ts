export class LoggingService{
   LogStatusChange(status: string){
    console.log('A server status changed, new status: ' + status);
   }
}