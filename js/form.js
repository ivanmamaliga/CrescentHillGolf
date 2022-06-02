var inv = document.getElementById('inv');
var svn = document.getElementById('sav');
var int = document.getElementById('int');


document.getElementById('calc').addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent form submission
    // alert('click');
   
    if (inv.value.length == 0 || svn.value.length == 0 || int.value.length == 0) {
      alert("PLease enter the values an all required cells");
    } else {
        document.getElementById('poff').value = (parseFloat(inv.value) * (parseFloat(int.value)/100 + 1) / parseFloat(svn.value)).toFixed(2) + " years";
    }
  });

//User clicks on the Reset button and the fields a reset to null

////////////////////// Toggle Navbar ///////////////////

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});