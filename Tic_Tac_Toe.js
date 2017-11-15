//Question 3
const rand = function(num) {
	return Math.floor(Math.random() * num)+1;
};
let isFirst = true;
let stop=false;
const board=[
	['', '', ''],
	['', '', ''],
	['', '', '']
];

const moves=[];
const sidePosition=[[0,1],[1,0],[1,2],[2,1]]
const addToArray=function(array, element){
	array.length++;
	array[array.length-1]=element;
	//return array;
}

const isTwoInLine=function(board, str){
	for(let i=0; i<=2; i++){
		//checks consecutive cells horizontally, vertically
		for(let j=0; j<=1; j++){
			if(board[i][j]===str&&board[i][j+1]===str && board[i][3-(j+1)-j]===""){
				addToArray(moves, [i, 3-(j+1)-j])
				return [i, 3-(j+1)-j];
			}
			if(board[j][i]===str && board[j+1][i]===str&& board[3-(j+1)-j][i]===""){
				addToArray(moves, [3-(j+1)-j, i])
				return [3-(j+1)-j, i];
		}
	}
	//checks first and last ones
	if(board[i][0]===str&&board[i][2]===str &&board[i][1]===""){
		addToArray(moves, [i,1])
		return [i,1];
	}
	if(board[0][i]===str&&board[2][i]===str &&board[1][i]===""){
		addToArray(moves, [1, i])
		return [1, i];
	}
}
//checking diagnols 2 consecutive cells
	if(board[0][0]===str && board[1][1]===str&& board[2][2]===""){
		addToArray(moves, [2, 2])
		return [2, 2]
	}
	if(board[1][1]===str&& board[2][2]===str && board[0][0]===""){
		addToArray(moves, [0, 0])
		return [0, 0]
	}
	if(board[0][2]===str && board[1][1]===str && board[2][0]===""){
		addToArray(moves, [2, 0])
		return [2, 0]
	}
	if(board[1][1]===str && board[2][0]===str && board[0][2]===""){
		addToArray(moves, [0, 2])
		return [0, 2]
	}
	if(((board[0][0]===str&& board[2][2]===str)||(board[0][2]===str&&board[2][0]===str))&&board[1][1]===""){
		addToArray(moves, [1, 1])
		return [1, 1]
	}
	return false;
}

const isIn=function(row, col){
	for(let i=row-1; i<=row+1; i++){
		for(let j=col-1; j<=col+1; j++){
			if(i>=0&&i<=2 && j>=0 && j<=2 && board[i][j]==="")
				return [i,j];
		}
	}
	return false
}

const addSecond=function(board, str){
	for(let i=0; i<=2; i++){
		for(let j=0; j<=2; j++){
			if(board[i][j]===str){
				let a=isIn(i, j);
				if(a!==false){
					addToArray(moves, a)
					return a;
			}
		}
	}
}
}

const nextMove=function(board, isFirst, moves){
  if(isFirst){
		let a=isTwoInLine(board, 'x')
		if(a!==false){
			return a;
		}
		let b=isTwoInLine(board, 'o');
		if(b!==false){
			return b;
		}
    if(moves.length===0){ //placing X at the corner
			let a=rand(2);
			let b=rand(2);
      addToArray(moves, [a-a%2, b-b%2]);
      return [a-a%2, b-b%2]
  }
	if(Math.abs(moves[1][0]-moves[1][1])===1){//player put O on the side
  	//placing X at different corner
			if(moves.length===2){
				addToArray(moves, [1,1])
				return [1,1];
			}
			if(moves.length===4){
				if(board[Math.abs(moves[0][0]-1)][moves[0][1]]===""){
					addToArray(moves, [Math.abs(moves[0][0]-2),moves[0][1]])
					return [Math.abs(moves[0][0]-2),moves[0][1]]
			}
				if(board[moves[0][0]][Math.abs(moves[0][1]-1)]==="")	{
					addToArray(moves, [moves[0][0], Math.abs(moves[0][1]-2)])
					return [moves[0][0], Math.abs(moves[0][1]-2)]
				}
		}
	}
	if(moves[1][0]%2===0 && moves[1][1]%2===0){//player  put O in the corner
		if(moves.length===2){
			if(board[Math.abs(moves[0][0]-2)][Math.abs(moves[0][1]-2)]===""){
				addToArray(moves, [Math.abs(moves[0][0]-2), Math.abs(moves[0][1]-2)])
				return [Math.abs(moves[0][0]-2), Math.abs(moves[0][1]-2)];
			}
			addToArray(moves, [1,1])
			return [1,1];
		}
		if(moves.length===4){
			addToArray(moves, [moves[0][0], Math.abs(moves[0][1]-2)]);
			return [moves[0][0], Math.abs(moves[0][1]-2)];
		}
	}
	if(moves[1][0]===1&&moves[1][1]===1){//player put O in the middle
		if(moves.length===2){
			addToArray(moves, [Math.abs(moves[0][0]-2), Math.abs(moves[0][1]-2)])
			return [Math.abs(moves[0][0]-2), Math.abs(moves[0][1]-2)];
		}
	}
			return addSecond(board, 'x');
	}
	else{//Computer is second
		let a=isTwoInLine(board, 'o')
		if(a!==false){
			return a;
		}
		let b=isTwoInLine(board, 'x');
		if(b!==false){
			return b
		}
		if(Math.abs(moves[0][0]-moves[0][1])===1 ){//player places X on the side
			if(moves.length===1){
			addToArray(moves, [1,1])
			return [1,1];
		}
		if(moves.length===3 && Math.abs(moves[2][0]-moves[2][1])===1 && board[2][2]===""){
			addToArray(moves, [2,2])
			return [2,2];
		}
		}
		if(moves[0][0]%2===0&&moves[0][1]%2===0){//player places X in the corner
			if(moves.length===1){
				addToArray(moves, [1,1])
				return [1,1];
			}
			if(moves.length===3 && Math.abs(moves[2][0]-moves[2][1])===1 && Math.abs(moves[0][0]-moves[2][0])===1){
				addToArray(moves, [moves[0][0], moves[2][1]])
				return [moves[0][0], moves[2][1]];
			}
			else if(moves.length===3 && Math.abs(moves[2][0]-moves[2][1])===2){
				addToArray(moves, [0,1])
				return [0,1]
			}

		}
		if(moves[0][0]===1&& moves[0][1]===1){// player places X in the middle
			if(moves.length===1){
				let a=rand(2);
				let b=rand(2);
				addToArray(moves, [a-a%2, b-b%2]);
				return [a-a%2, b-b%2];
			}
			if(moves.length===4){//player places X in the opposite corner
				addToArray(moves, [moves[1][0], moves[3][1]])
				return [moves[1][0], moves[3][1]];
			}
		}
		return addSecond(board, 'o');
	}

	}


//Question 4
const makeMove=function(board, loc, isX){
  if(isX)
    board[loc[0]][loc[1]]='x'
  else
    board[loc[0]][loc[1]]='o'
	return board;
}
const canMakeMove=function(board, loc, isX){
	if(!(loc[0]<=2&&loc[0]>=0&&loc[1]<=2&&loc[1]>=0&&(board[loc[0]][loc[1]]==='')))
		return -1;
	return 0;
}
//Question 5
const findWinner=function(board){
  const win={
    winner:"",
    winningLocations:[]
  };
  for(let i=0; i<=2; i++) {
    if(board[i][0]!==""&&board[i][0]===board[i][1]&&board[i][1]===board[i][2]){//checks columns
      win.winner=board[i][1];
      win.winningLocations=[[i,0], [i,1], [i,2]]
  }
    else if(board[0][i]!==""&&board[0][i]===board[1][i]&&board[1][i]===board[2][i]){//check rows
      win.winner=board[1][i];
      win.winningLocations=[[0,i], [1,i], [2,i]]
  }
    else if(board[0][0]!=="" &&board[0][0]===board[1][1]&&board[1][1]===board[2][2]){//checks diagnols
      win.winner=board[1][1];
      win.winningLocations=[[0,0], [1,1], [2,2]]
  }
  else if(board[2][0]!=="" &&board[0][2]===board[1][1]&&board[1][1]===board[2][0]){//checks diagnols
    win.winner=board[1][1];
    win.winningLocations=[[0,2], [1,1], [2,0]]
}

  if(win.winner!=="")
    return win;
}
for(let i=0; i<=2; i++){//game is not over
  for(let j=0; j<=2; j++){
    if(board[i][j]==="")
      return undefined;
  }
}
  return {
    winner: "none"
  };
}

//Question 6
const loop=function(){
  while(true){
		let checkX=nextMove(board, true, moves);
  	if(canMakeMove(board, checkX, true)===-1){
    	console.log("Not valid move")
			return;
		 }
	 	else{
			 makeMove(board, checkX, true)
			 console.log(board);
		 }
		 if(findWinner(board)!==undefined){
			console.log(findWinner(board))
			return;
		}
		let checkO=nextMove(board, false, moves);
		if(canMakeMove(board, checkO, false)===-1){
			console.log("Not valid move")
			return;
		 }
  else{
		makeMove(board, checkO, false);
		console.log(board);
  }
	if(findWinner(board)!==undefined){
	 console.log(findWinner(board))
	 return
 }
}
}

//loop();
//Question 7
const canvas=document.getElementById('canvas')
const c=canvas.getContext('2d');
canvas.width= 640;
canvas.height=640;
canvas.style = "position:absolute; left: 30%; top: 10%;";
const imgO=new Image();
imgO.src="imageO.png"
const imgX=new Image();
imgX.src="imageX.png"

const draw=function(){
c.lineWidth=20
c.beginPath();
c.moveTo(210,0);
c.lineTo(210,640);
c.strokeStyle="#005200"
c.stroke();
c.beginPath();
c.moveTo(430,0);
c.lineTo(430,640);
c.stroke();
c.beginPath();
c.moveTo(0,210);
c.lineTo(640,210);
c.stroke();
c.beginPath();
c.moveTo(0,420);
c.lineTo(640,420);
c.stroke();
for(let i=0; i<=2; i++){
	for(let j=0; j<=2; j++){
		if(board[j][i]==='x')
			c.drawImage(imgX, i*200+20*i, j*200+20*j, 200, 200)
		else if(board[j][i]==='o')
			c.drawImage(imgO, i*200+20*i, j*200+20*j, 200, 200)
	}
}

}
let madeClick=false;
let firstClick=true;
let champion;
const update=function(){
	champion=findWinner(board)
	if(champion!==undefined){
			stop=true
			return;
}
	if(isFirst&&madeClick){
		let nextO=nextMove(board, false, moves);
		makeMove(board, nextO, false)
		madeClick=!madeClick
}
else if(!isFirst&&firstClick){
		let nextX=nextMove(board, true, moves)
		makeMove(board, nextX, true);
		firstClick=!firstClick
}
}

const checkClick=function(x, y){
	for(let i=0; i<=2; i++){
		for(let j=0; j<=2; j++){
			if(x<(j+1)*200+20*j&& x>j*200+20*j && y<(i+1)*200+20*i && y>i*200+20*i &&board[i][j]===""){
				madeClick=!madeClick
				firstClick=!firstClick
				if(!stop&& findWinner(board)===undefined){
				if(!isFirst){
					addToArray(moves, [i,j])
					makeMove(board, [i,j], false)
					return
				}
				else{
					addToArray(moves, [i,j])
					makeMove(board, [i,j], true)
					return
				}
				return
			}
		}
}
}
}
canvas.addEventListener('click', function(evt) {
  	const x=evt.offsetX
   	const y=evt.offsetY
		checkClick(x, y)

}, false);

const animate=function(){
	if(!stop){
	draw();
	update();
	draw();
	requestAnimationFrame(animate)
}
else if(!isFirst){
		if(champion.winner==="o")
			alert("You rock!!!")
		else if(champion.winner==="x")
			alert("Come on, you can do better")
		else
			alert("Try again")
			return;
}
else{
	if(champion.winner==="x")
		alert("You rock!!!")
	else if(champion.winner==="o")
		alert("Come on, you can do better")
	else
		alert("Try again")
		return;
}
}
animate();
