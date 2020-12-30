const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
   
     if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ){
       return userInput;
     }
     else{
       console.log('Error!');
     }
   
   };
   
   //console.log(getUserChoice('rock'));
   //console.log(getUserChoice('Roock'));
   
   const getComputerChoice = () => {
     const randomNumber =  Math.floor(  Math.random() * 3 );
   
       switch(randomNumber){
       case 0:
         return 'rock';
         break;
       case 1:
         return 'paper';
         break;
       case 2:
         return 'scissors';
         break;
       
       }
   
   };
   
   //console.log(getComputerChoice());
   //console.log(getComputerChoice());
   //console.log(getComputerChoice());
   
   
   const determineWinner = (userChoice , computerChoice ) => {
         // user play the Bomb
         if(userChoice === 'bomb'){
           return 'The User Won the game!'
         }
   
         
         // Tie Game
      if( userChoice === computerChoice ){
         return 'The game is a tie!';
      }
   
         // User = Rock
      if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'The computer won!';
        }else{
          return 'You WOn!';
        }
      }
   
       // User = Paper
      if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'The computer won!';
        }else{
          return 'You won!';
        }
      };
   
   
   
       // User = scissors
       if(userChoice === 'scissors'){
           if(computerChoice === 'rock'){
             return 'The computer won!';
           }else{
             return 'You won!';
           }
       };
   
   };
   
   //console.log(determineWinner('paper', 'scissors'));
   //console.log(determineWinner('paper', 'paper'));
   //console.log(determineWinner('paper', 'rock'));
   
   
   const playGame = () => {
     const userChoice = getUserChoice('bomb');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice );
   
     console.log(determineWinner( userChoice , computerChoice ));
   
   };
   
   playGame();
   
   
   
   