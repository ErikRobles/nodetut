const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user)

// method returns the system uptime in hours
console.log(`The system uptime is: ${Math.round(os.uptime() / 60 / 60 * 100) / 100 } hours`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);