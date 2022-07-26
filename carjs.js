let mt=500
let r=50
let t1=0
let t2=0
document.getElementById('body').addEventListener('keydown',function(c){
    switch(c.keyCode){
        case 39: 
        if(r>=500){
            alert('Game Over')
            location.reload()
        }
            r=r+180
            document.getElementById('car').style.marginLeft=r+'px'
           
        }
})
document.getElementById('body').addEventListener('keydown',function(a) {
    switch(a.keyCode){
        case 37:
            if(r<=50){
                alert('Game Over')
                location.reload()
            }
            r=r-180
            document.getElementById('car').style.marginLeft=r+'px'
            

    }
    
})
//for creat a new 
function clickme() {
    setInterval(block1,5000)
    let y=0
    function block1() {
    let block1=document.createElement('img')
    block1.src='./pinpng.com-the-rock-png-19153.png'
    block1.classList.add('block1')
    document.getElementById('block2').appendChild(block1)
    
}
    
}
//for move down
function down1() {
    let k1=0
    let i=setInterval(d,10)
    function d() {
        document.getElementById('block1').style.marginTop=k1+'px'
        k1=k1+1
        if(k1>=690){
            k1=1
        }
        
    }
    
}
function down2() {
    let k2=0
    let i=setInterval(d,10)
    function d() {
        document.getElementById('block2').style.marginTop=k2+'px'
        k2=k2+1
        if(k2>=690){
            k2=1
            
        }
        
    }
    
}
function down3() {
    let dist=0
    let carmt=610
    let k3=0
    let sp=10


    let i=setInterval(d,sp)
    function d() {
        let time=document.getElementById('time')


        document.getElementById('block3').style.marginTop=k3+'px'
        k3=k3+1
        dist++
        document.getElementById('distance').innerText=parseInt(dist/10)
        if(k3>=690){
            k3=1
            
        }
        //change cheyyanam mistake und
        if (k3>=450 ) {
            console.log('gameover');
            console.log(`k3=${k3} r=${r}`);
            clearInterval(i)
            t2=Date.now()
            //document.getElementById('').innerHTML=<h1>GAME OVER</h1>
            time.innerText=parseInt(((t2-t1)/100)/10)+'second'
            alert('game over')
            location.reload()
        }
        
    }
    
}
function down4() {
    let k4=0
    let i=setInterval(d,10)
    function d() {
 
        document.getElementById('block4').style.marginTop=k4+'px'
        k4=k4+1
        if(k4>=690){
            k4=1
            
        }
        
        
        
    }
    
}
function all() {
    let l=document.getElementById('block3').style.marginLeft
    console.log(`${l}`);
    
    t1=Date.now()
    down1()
    down2()
    down3()
    down4()
}

function forreload() {
    location.reload()

}