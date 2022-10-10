let X;
let brojac = 0;

function pretvorba (X){
while(X>=60){
   X-=60;
   brojac++;
}
console.log("Ovo je ", +brojac+ " sata i " +X+  " minuta");

}


pretvorba(120);