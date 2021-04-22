console.log("hey file 2 hiiii");
class Book {
    constructor(name, author, Email, Phoneno, Fullname, Address, City, Pin) {
        this.name = name;
        this.author = author;
        this.Email = Email;
        this.Phoneno = Phoneno;
        this.Fullname = Fullname;
        this.Address = Address;
        this.City = City;
        this.Pin = Pin;

    }
}
class Display {
    add(book) {
        console.log("adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `
    <tr>
            
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.Pin}</td>
          </tr>`;

        tableBody.innerHTML += uiString;

    }
    clear() {
        let libraryFrom = document.getElementById('libraryFrom');
        libraryFrom.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2 || book.Pin.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    show (Pin, displayMessage) {
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
}
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
    


        //localStorage.getItem('libraeyFrom'.JSONstringify(libraryFromSubmit));
        //console.log(localStorage.getItem(libraryFromSubmit));


        let book = new Book(name, author, Email, Phoneno, Fullname, Address, City, Pin);
    
        console.log(book);
    
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
      localStorage.setItem('book',book);
       console.log(localStorage.getItem(book));
        e.preventDefault();
       

        

    }   
