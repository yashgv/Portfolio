matrix=[[null,null,null],[null,null,null],[null,null,null]];
var active=0;
function check(x){
    if(matrix[0][0]==x && matrix[1][1]==x && matrix[2][2]==x){
        return true;
    }
    if(matrix[0][2]==x && matrix[1][1]==x && matrix[2][0]==x){
        return true;
    }
    for(var i=0;i<3;i++){
        flag=true;
        for(var j=0;j<3;j++){
            if(matrix[i][j]!=x){
                flag=false;
               break; 
            }
        }
        if(flag==true){
            return true;
        }
    }
    for(var i=0;i<3;i++){
        flag=true;
        for(var j=0;j<3;j++){
            if(matrix[j][i]!=x){
                flag=false;
               break; 
            }
        }
        if(flag==true){
            return true;
        }
    }
    return false;
}

//Helper function
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function fill(i,j){
    
    active=(active==0)?1:0;
    if(matrix[i][j]==null){
        matrix[i][j]=active;
        if(active){
            let box= document.querySelector("#box"+i+j+" .x");
            css(box,{
                opacity: 1
            });
        }
        else{
            let box= document.querySelector("#box"+i+j+" .o");
            css(box,{
                opacity: 1
            });
            
        }
    }
    var cbox= document.querySelector("#cbox"+i+j);
    css(cbox,{
        'z-index':5
    });
    var cover= document.querySelector(".cover");
    var flag=true;
    for( let i=0; i<3; i++ ){
        for(let j=0;j<3;j++){
            if(matrix[i][j]==null){
                flag=false;
                break;
            }
        }
        if(flag==false) break;
    }
    if(flag==true){
        let winner= document.querySelector(".winner"+" .Tie");
        css(winner,{
            opacity: 1
        });
        css(cover,{
            'z-index': 5

        })
        return;
    }
    if(check(matrix[i][j])){
        let winner= document.querySelector(".winner"+" .w"+matrix[i][j]);
        css(winner,{
            opacity: 1
        });
        css(cover,{
            'z-index': 5

        })
        return;
    }
    
}

function reset(){
    location.reload();
}


// 0,0 0,1 0,2
// 1,0 1,1 1,2
// 2,0 2,1 2,2

