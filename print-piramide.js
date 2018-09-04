
function test (rows) {
    for (let i = 1; i <= rows ; i++) {        
        let line = '';  
        for (let j = 1; j < (rows + i); j++) 
            line += j <= (rows - i) ? ' ' : '#'; 
        console.log(line); 
    }
}

function trianglePrint(height){
    let base = height * 2 - 1;
    let axis = height - 1;
    for (let j = 0; j < height; j++) {
      let str = '';
      for (let i = 0; i < base; i++) {
        if (i < axis - j || i > axis + j) {
          str = str+' '
        } else {
          str = str+'#'
        }
      }  
      console.log(str)
    }
  }

//getAnswer();

test(4);