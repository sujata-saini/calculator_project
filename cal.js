
let  screen=document.getElementById('screen');
let button = document.querySelectorAll('button');
// const input = document.getElementById('percentage').value;
// console.log(input );
console.log(button);
let buttonsArray= Array.from(button);

let string =" ";

console.log(buttonsArray);
   buttonsArray.forEach(bttnn =>{
     console.log(bttnn);
      bttnn.addEventListener( 'click' ,(e) => {

        // console.log(e);
        // console.log(e.target);

        // delete krne ke liye substring method ka use krte h , substring actual string se -1 idx krti jati h 
        if (e.target.innerHTML == 'DE'){
            string = string.substring(0 ,string.length-1);
            screen.value = string;
        } 

        // string ko null krege all clear krne ke liye //
          else if (e.target.innerHTML == "AC"){
            string = '';
            screen.value = string ;
          }
           
          //  = use krne pr result print krnane ke liye eval  function use kiye 
          else if (e.target.innerHTML == '='){
            
            //string ko math expression ki trh calculate krne ke liey 
             
            try{
              // 2 nos ke beech m % ko handle krneke liey 
                
              string = string.replace(/(\d+)%(\d+)/g,(match ,num1,num2 )=>{
                return (parseFloat(num1)/100 )*parseFloat(num2);
              
              });
            


            string = eval(string);
            screen.value = string;
          } catch(error){
            // string += '%';
            screen.value = 'Error';

          }
        }
          
          else if (e.target.innerHTML == '%'){
            // if (string  && !string.endsWith('%')){
            //  let number = parseFloat(string);
              string += '%';
              //  string =(number/100).toString();
            // }
              screen.value= string ;
            
          }

        else {
        string += e.target.innerHTML;
        screen.value  =string;
        } 
        // console.log(e.target.innerHTML)
    })


}
);
    
