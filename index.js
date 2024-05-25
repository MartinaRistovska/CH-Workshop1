//1. Kreirajte varijabla koja ke go cuva e-mailot od korisnik. 
//Napravete proverka dokolku ima prazni mesta na pocetok ili na kraj da gi izvadite istite i istiot sekogas da e so mali bukvi, bez razlika kako ke go vnese korisnikot.  
let userEmail=' Example@email.com'
let emailCheck=userEmail.toLocaleLowerCase().trim();
console.log(emailCheck);


//2. Kreirajte nova varijabla za url na link. Dokolku linkot zapocnuva so https prikazete poraka "

//The URL is secure. ", dokolku pocnuva so http ""

//Warning: The URL is not secure.". Se ostanato "Invalid url". 

let webSite='https://m.youtube.com/';
if(webSite.startsWith('https')){
    console.log('The URL is secure');
}else if (webSite.startsWith('https')){
    console.log('Warning: The URL is not secure.');
}else{
    console.log('Invalid url');
}

//3. Napravete proverka za filename so koja ekstenzija zavrsuva: .txt , .pdf, .jpg, .css. Soodvetna poraka za sekoja od niv. Site ostanati - Invalid file name. 
let fileName='document.pdf';
if(fileName.endsWith('.pdf')){
    console.log('Your file is in pdf form');
}else if(fileName.endsWith('.txt')){
    console.log('Your file is txt form');
}else if(fileName.endsWith('.jpg')){
    console.log('Your file is .jpg form');
}else if(fileName.endsWith('.css')){
    console.log('Your file is .css form');
}else{
    console.log('Invalid file name');
}
//4. Vo recenicata " 

//I love cats, cats are awesome " promenete gi cats so dogs. 
let sentence='I love cats, cats are awesome';
let sentenceReplace=sentence.replaceAll('cats','dogs');
console.log(sentenceReplace);


//5. Kreirajte varijabli firstName, lastName i fullName. Dokolku firstName i lastName ne se prazni i se podolgi od 3 karakteri spojte gi zaedno i prikazete poraka Hello, John Doe !
let firstName='John';
let lastName='Doe';
let fullName='';

if(firstName.length > 3 && lastName.length > 3 ){
    fullName=firstName.concat('',lastName);
    console.log('Hello,',fullName);
}else{
    console.log('Your input is invalid, has less than 3 caracters')
}

