//4. Simple Login System ( if the credentials match) 
//- username: admin, pass: adminpass - Welcome, admin!- username: user123 , pass: password123 - Welcome, user123!
//- missmatch -  Invalid username or password.

let personOne={
    username: 'admin',
    pass: 'adminpass'

}
let personTwo={
    username: 'user123',
    pass: 'password123'
}

if(personOne===personOne){
    console.log('Welcome, admin!')
}else if(personTwo===personTwo){
    console.log('Welcome, user123!')
}else if (personOne===personTwo){
    console.log('Invalid username or password')
}// ne sum sigurna za reshenieto
