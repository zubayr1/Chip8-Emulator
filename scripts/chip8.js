const MEMORY_SIZE = 4096
const NUM_REGISTERS = 16;

class chip8
{
    constructor(monitor)
    {
        this.mempry = new Uint8Array(MEMORY_SIZE);
        this.V = new Uint8Array(NUM_REGISTERS);

        this.index = 16;

        this.pc = 0x200;

        this.stack = []

        this.sp = 0;

        this.delayTimer = 0;

        this.soundTimer = 0;

        //this.keyboard

        this.monitor = monitor;

        this.paused = false;

        this.speed = 10;
    }

    
}

export default chip8;