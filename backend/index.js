const express = require( 'express' )
const app = express()
app.get( '/users', ( req, res ) => {
    console.log( 'hit / users path' );
    res.status( 200 ).send( 'hello world' )
} )
app.listen( '3000', () => {
    console.log( 'app is running on port 3000...' );
} )


class Person {
    name = 'Ahmad'
}

const person = new Person()
person.name = 'Sulaf'; // as i make it setks
console.log( person.name );