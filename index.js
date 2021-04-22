console.log("hey this website vishal library hii");


//to does
//1. store the all data to the localstorage



//constructor
function Book(name, author, Email, Phoneno, Fullname, Address, City, Pin) {
    this.name = name;
    this.author = author;
    this.Email = Email;
    this.Phoneno = Phoneno;
    this.Fullname = Fullname;
    this.Address = Address;
    this.City = City;
    this.Pin = Pin;

}
//Display constructor
function Display() {


}
//add method to display prototype
Display.prototype.add = function (book) {
    console.log("adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
            
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.Pin}</td>
          </tr>`;

    tableBody.innerHTML += uiString;



}

//implement the clear function
Display.prototype.clear = function () {
    let libraryFrom = document.getElementById('libraryFrom');
    libraryFrom.reset();
}
//implemnt the validate function

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2 ||book.Pin.length<2 ){
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (Pin, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = ` <div class="alert alert--${Pin} alert-dismissible fade show" role="alert">
    <strong> Message:</strong> ${displayMessage} 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`;

    setTimeout(function(){
        message.innerHTML=''
    }, 2000);
}


//add submit event listener to libraryfrom

let libraryFrom = document.getElementById('libraryFrom');
libraryFrom.addEventListener('submit', libraryFromSubmit);

function libraryFromSubmit(e) {
    console.log("you have submitted library from");
    //e.preventDefault();
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let Email = document.getElementById('email').value;
    let Phoneno = document.getElementById('phoneno').value;
    let Fullname = document.getElementById('fullname').value;
    let Address = document.getElementById('address').value;
    let City = document.getElementById('city').value;
    let Pin = document.getElementById('pin').value;

    
       

    let book = new Book(name, author, Email, Phoneno, Fullname, Address, City, Pin);

    console.log(book);

    //localStorage.getItem('libraeyFrom',);
    //console.log(localStorage.getItem(book));

    

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        //show error to the user
        display.show('danger', 'Sorry you can not  add this book');
    }

    //1. store the all data to the localstorage


   //localStorage.setItem('libraryFromSubmit',JSON.stringify(libraryFromSubmit));
   localStorage.setItem('book',JSON.stringify(book));
    //console.log(localStorage.getItem(libraryFromSubmit));
   // localStorage.clear();
    console.log(localStorage.getItem(book));

    e.preventDefault();
}  