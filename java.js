// login and sign up script 
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    if(name.value.length == 0){
    alert('Please fill in email');
    
    }else if(pw.value.length == 0){
    alert('Please fill in password');
    
    }else if(name.value.length == 0 && pw.value.length == 0){
    alert('Please fill in email and password');
    
    }else if(pw.value.length > 8){
    alert('Max of 8');
    
    }else if(!pw.value.match(numbers)){
    alert('please add 1 number');
    
    }else if(!pw.value.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');
    
    }else if(!pw.value.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');
    
    }else{
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    alert('Your account has been created');
    }
    }
    
    //checking
    function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");
    
    if(userName.value == storedName && userPw.value == storedPw){
    alert('You are logged in.');
    }else{
    alert('Error on login');
    }
    }
    /* end  */
    
    // modal cart 
    var Product = document.getElementById("ProductImg1");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[0].onclick =function()
    {
        ProductImg1.src = SmallImg[0].src;
    }
    SmallImg[1].onclick =function()
    {
        ProductImg1.src = SmallImg[1].src;
    }
    SmallImg[2].onclick =function()
    {
        ProductImg1.src = SmallImg[2].src;
    }
    SmallImg[3].onclick =function()
    {
        ProductImg1.src = SmallImg[3].src;
    }
    
    // 2 card
    var Product = document.getElementById("ProductImg2");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[4].onclick =function()
    {
        ProductImg2.src = SmallImg[4].src;
    }
    SmallImg[5].onclick =function()
    {
        ProductImg2.src = SmallImg[5].src;
    }
    SmallImg[6].onclick =function()
    {
        ProductImg2.src = SmallImg[6].src;
    }
    SmallImg[7].onclick =function()
    {
        ProductImg2.src = SmallImg[7].src;
    }
    
    // 3 card
    var Product = document.getElementById("ProductImg3");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[8].onclick =function()
    {
        ProductImg3.src = SmallImg[8].src;
    }
    SmallImg[9].onclick =function()
    {
        ProductImg3.src = SmallImg[9].src;
    }
    SmallImg[10].onclick =function()
    {
        ProductImg3.src = SmallImg[10].src;
    }
    SmallImg[11].onclick =function()
    {
        ProductImg3.src = SmallImg[11].src;
    }
    
    // 4 card
    var Product = document.getElementById("ProductImg4");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[12].onclick =function()
    {
        ProductImg4.src = SmallImg[12].src;
    }
    SmallImg[13].onclick =function()
    {
        ProductImg4.src = SmallImg[13].src;
    }
    SmallImg[14].onclick =function()
    {
        ProductImg4.src = SmallImg[14].src;
    }
    SmallImg[15].onclick =function()
    {
        ProductImg4.src = SmallImg[15].src;
    }
    
    // 5 card
    var Product = document.getElementById("ProductImg5");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[16].onclick =function()
    {
        ProductImg5.src = SmallImg[16].src;
    }
    SmallImg[17].onclick =function()
    {
        ProductImg5.src = SmallImg[17].src;
    }
    SmallImg[18].onclick =function()
    {
        ProductImg5.src = SmallImg[18].src;
    }
    SmallImg[19].onclick =function()
    {
        ProductImg5.src = SmallImg[19].src;
    }
    
    // 6 card
    var Product = document.getElementById("ProductImg6");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[20].onclick =function()
    {
        ProductImg6.src = SmallImg[20].src;
    }
    SmallImg[21].onclick =function()
    {
        ProductImg6.src = SmallImg[21].src;
    }
    SmallImg[22].onclick =function()
    {
        ProductImg6.src = SmallImg[22].src;
    }
    SmallImg[23].onclick =function()
    {
        ProductImg6.src = SmallImg[23].src;
    }
    
    // 7 card
    var Product = document.getElementById("ProductImg7");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[24].onclick =function()
    {
        ProductImg7.src = SmallImg[24].src;
    }
    SmallImg[25].onclick =function()
    {
        ProductImg7.src = SmallImg[25].src;
    }
    SmallImg[26].onclick =function()
    {
        ProductImg7.src = SmallImg[26].src;
    }
    SmallImg[27].onclick =function()
    {
        ProductImg7.src = SmallImg[27].src;
    }
    
    // 8 card
    var Product = document.getElementById("ProductImg8");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[28].onclick =function()
    {
        ProductImg8.src = SmallImg[28].src;
    }
    SmallImg[29].onclick =function()
    {
        ProductImg8.src = SmallImg[29].src;
    }
    SmallImg[30].onclick =function()
    {
        ProductImg8.src = SmallImg[30].src;
    }
    SmallImg[31].onclick =function()
    {
        ProductImg8.src = SmallImg[31].src;
    }
    
    // 9 card
    var Product = document.getElementById("ProductImg9");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[32].onclick =function()
    {
        ProductImg9.src = SmallImg[32].src;
    }
    SmallImg[33].onclick =function()
    {
        ProductImg9.src = SmallImg[33].src;
    }
    SmallImg[34].onclick =function()
    {
        ProductImg9.src = SmallImg[34].src;
    }
    SmallImg[35].onclick =function()
    {
        ProductImg9.src = SmallImg[35].src;
    }
    
    // 10 card
    var Product = document.getElementById("ProductImg10");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[36].onclick =function()
    {
        ProductImg10.src = SmallImg[36].src;
    }
    SmallImg[37].onclick =function()
    {
        ProductImg10.src = SmallImg[37].src;
    }
    SmallImg[38].onclick =function()
    {
        ProductImg10.src = SmallImg[38].src;
    }
    SmallImg[39].onclick =function()
    {
        ProductImg10.src = SmallImg[39].src;
    }
    
    // 11 card
    var Product = document.getElementById("ProductImg11");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[40].onclick =function()
    {
        ProductImg11.src = SmallImg[40].src;
    }
    SmallImg[41].onclick =function()
    {
        ProductImg11.src = SmallImg[41].src;
    }
    SmallImg[42].onclick =function()
    {
        ProductImg11.src = SmallImg[42].src;
    }
    SmallImg[43].onclick =function()
    {
        ProductImg11.src = SmallImg[43].src;
    }
    
    // 12 card
    var Product = document.getElementById("ProductImg12");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[44].onclick =function()
    {
        ProductImg12.src = SmallImg[44].src;
    }
    SmallImg[45].onclick =function()
    {
        ProductImg12.src = SmallImg[45].src;
    }
    SmallImg[46].onclick =function()
    {
        ProductImg12.src = SmallImg[46].src;
    }
    SmallImg[47].onclick =function()
    {
        ProductImg12.src = SmallImg[47].src;
    }
    // // 13 card
    // var Product = document.getElementById("ProductImg13");
    // var SmallImg = document.getElementsByClassName("small-img");
    
    // SmallImg[48].onclick =function()
    // {
    //     ProductImg13.src = SmallImg[48].src;
    // }
    // SmallImg[49].onclick =function()
    // {
    //     ProductImg13.src = SmallImg[49].src;
    // }
    // SmallImg[50].onclick =function()
    // {
    //     ProductImg13.src = SmallImg[50].src;
    // }
    // SmallImg[51].onclick =function()
    // {
    //     ProductImg12.src = SmallImg[51].src;
    // }
    
    // end 
    
    
    
    