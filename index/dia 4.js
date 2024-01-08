let cont=0;
undefined
while(contador < 5){
    contador++;
    console.log(contador);
}
VM239:1 Uncaught ReferenceError: contador is not defined
    at <anonymous>:1:16
(anonymous) @ VM239:1
while(cont < 5){
    cont++;
    console.log(cont);
}
VM263:3 1
VM263:3 2
VM263:3 3
VM263:3 4
VM263:3 5
undefined
while(cont < 5){
    cont++;
    console.log(cont);
}
undefined
let cont=10
undefined
while(cont > 0){
    cont--;
    console.log(cont);
}
VM314:3 9
VM314:3 8
VM314:3 7
VM314:3 6
VM314:3 5
VM314:3 4
VM314:3 3
VM314:3 2
VM314:3 1
VM314:3 0
undefined
let suma= 7=2;
VM360:1 Uncaught SyntaxError: Invalid left-hand side in assignment
let suma= 7+2;
undefined
let resta=5-2:
VM407:1 Uncaught SyntaxError: Unexpected token ':'
let resta=5-2;
undefined
let multiplicacion=3*5;
undefined
let division=4/2;
undefined
let modulo=10%4;
undefined
let mayorQue=10>5;
undefined
let mayorigualQue=13>=14;
undefined
let menorQue=10<20;
undefined
let menorigualQue=25<=5;
undefined
let igualQue='hola'==='hola';
undefined
let diferenteQue='hola'!='hola';
undefined
let and= true && true;
undefined
let not= !false
undefined
let or=false || true;
undefined
const
VM1245:1 Uncaught SyntaxError: Unexpected end of input
const persona = {
    nombre:"Carlos",
    edad: 25,
    ocupacion: "Desarrolador" 
};
undefined
const colors =["rojo","verde","azul"];
undefined
console.log(persona.edad);
VM1540:1 25
undefined
const persona = {
    nombre:"Pedrito",
    edad: 25,
    ocupacion: "ns",
};
undefined
console.log(persona.nombre);
VM1763:1 Pedrito
undefined
let cadena="Minombre es Pedrito y tengo 25 años";
undefined
console.log(cadena.nombre);
VM2047:1 undefined
undefined
persona["apellido"]="Perez";
'Perez'
persona["ci"]=12345678;
12345678
console.log(persona);
VM2229:1 {nombre: 'Pedrito', edad: 25, ocupacion: 'ns', apellido: 'Perez', ci: 12345678}
undefined
persona.nombre="Juanito";
'Juanito'
console.log(persona);
VM2303:1 {nombre: 'Juanito', edad: 25, ocupacion: 'ns', apellido: 'Perez', ci: 12345678}
undefined
persona.edad=22;
22
persona.ocupacion="Dotero"
'Dotero'
console.log(persona);
VM2404:1 {nombre: 'Juanito', edad: 22, ocupacion: 'Dotero', apellido: 'Perez', ci: 12345678}
undefined
console.log(colors);
VM2451:1 (3) ['rojo', 'verde', 'azul']
undefined
console.log(colors.length);
VM2483:1 3
undefined
console.log(colors[0]);
VM2517:1 rojo
undefined
console.log(colors[1]);
VM2528:1 verde
undefined
console.log(colors[2]);
VM2543:1 azul
undefined
console.log(colors[3]);
VM2554:1 undefined
undefined
console.log(colors.find);("rojo");
VM2600:1 ƒ find() { [native code] }
'rojo'
console.log(colors);
VM2616:1 (3) ['rojo', 'verde', 'azul']
undefined
for (i=0; i<colors.length;i++ ){
    console.log(colors[i]);


}
VM2905:2 rojo
VM2905:2 verde
VM2905:2 azul
undefined
for (i=0; i<colors.length;i++ ){
    console.log("Elemento: ",colors[i]," indice ",i);


}
VM3027:2 Elemento:  rojo  indice  0
VM3027:2 Elemento:  verde  indice  1
VM3027:2 Elemento:  azul  indice  2
undefined
colors.push("amarillo");
4
colors.push("lila");
5
colors.push("cafe");
6
console.log(colors);
VM3131:1 (6) ['rojo', 'verde', 'azul', 'amarillo', 'lila', 'cafe']
undefined
colors.reverse("cafe");
(6) ['cafe', 'lila', 'amarillo', 'azul', 'verde', 'rojo']
colors.reverse("lila");
(6) ['rojo', 'verde', 'azul', 'amarillo', 'lila', 'cafe']
colors.reverse();
(6) ['cafe', 'lila', 'amarillo', 'azul', 'verde', 'rojo']
colors.sort("lila");
VM3233:1 Uncaught TypeError: The comparison function must be either a function or undefined: lila
    at Array.sort (<anonymous>)
    at <anonymous>:1:8
(anonymous) @ VM3233:1
colors.sort();
(6) ['amarillo', 'azul', 'cafe', 'lila', 'rojo', 'verde']
colors.sort();
(6) ['amarillo', 'azul', 'cafe', 'lila', 'rojo', 'verde']
colors.push("Rosado");
7
colors.push("Naranja");
8
colors.sort();
(8) ['Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', 'verde']
colors.push(4);
9
colors.push(6);
10
colors.push(8);
11
console.log(colors);
VM3391:1 (11) ['Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', 'verde', 4, 6, 8]
undefined
colors.push(true);
12
colors.push(7.8);
13
console.log(colors);
VM3442:1 (13) ['Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', 'verde', 4, 6, 8, true, 7.8]0: 41: 62: 7.83: 84: "Naranja"5: "Rosado"6: "amarillo"7: "azul"8: "cafe"9: "lila"10: "rojo"11: true12: "verde"length: 13[[Prototype]]: Array(0)
undefined
colors.sort();
(13) [4, 6, 7.8, 8, 'Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', true, 'verde']
const num=[1,2,3,4,5];
undefined
colors.push(num);
14
console.log(colors);
VM3573:1 (14) [4, 6, 7.8, 8, 'Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', true, 'verde', Array(5)]
undefined
colors.sort();
(14) [Array(5), 4, 6, 7.8, 8, 'Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', true, 'verde']
colors.pop
ƒ pop() { [native code] }
colors.pop();
'verde'
var elemento = "verde"
undefined
colors.push(verde);
VM3706:1 Uncaught ReferenceError: verde is not defined
    at <anonymous>:1:13
(anonymous) @ VM3706:1
colors.push(elemento);
14
var elem= colors.pop();
undefined
console.log(elem);
VM3944:1 verde
undefined
console.colors;
undefined
console.log(colors);
VM4020:1 (13) [Array(5), 4, 6, 7.8, 8, 'Naranja', 'Rosado', 'amarillo', 'azul', 'cafe', 'lila', 'rojo', true]
undefined
colors.reverse();
(13) [true, 'rojo', 'lila', 'cafe', 'azul', 'amarillo', 'Rosado', 'Naranja', 8, 7.8, 6, 4, Array(5)]
var elem= colors.pop();
undefined
console.log(elem);
VM4182:1 (5) [1, 2, 3, 4, 5]
undefined
console.log(colors);
VM4192:1 (12) [true, 'rojo', 'lila', 'cafe', 'azul', 'amarillo', 'Rosado', 'Naranja', 8, 7.8, 6, 4]