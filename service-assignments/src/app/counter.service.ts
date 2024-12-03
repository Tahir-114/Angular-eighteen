export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    IncrementactiveToInactive() {
       this.activeToInactiveCounter++;
       console.log('Active to  Inactive Counter: ' + this.activeToInactiveCounter);

    }
    
    IncrementinactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active Counter: ' + this.inactiveToActiveCounter); 
    }
}