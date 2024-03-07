'use strict';
/* 

Con objectos:
object.values(objeto)  - Valores
object.entries(objeto)  - Objeto entero
object.key(objeto)      - Entradas (nombre de las propiedades)

obj[var]    - Para mostrar el valor de un item


------------------------------------
-------- Destructuring ... ---------
------------------------------------

Poner los ... según el lado del igual
...x = asdasd ->  Lado izquierdo divide
asdasd = ...x ->  Lado derecho junta

------------------------------------
------------- FOR - OF -------------
------------------------------------

FOR -- OF  (BUCLE PARA RECORRER ARRAY POR POSICION)

for ( const item of arr){
    ...
}

SI QUEREMOS EL INDEX DEL ITEM, NECESITAMOS EL .entries()  -> array de arrays

for (const item of arr.entries()){
    [0, Papa]
    [1, Ardullo]
    [...]
}

FORMA MÁS SENCILLA, SI NECESITAMOS UNA POSICION CONCRETA METEMOS DOS VARIABLES

for (const [i, el] of arr.entries()){
    i = index & el = element
}


-------------------------------------------
------------- Enhanced objets -------------
-------------------------------------------

ANTES - AHORA
Incluir una variable en objeto:

obj {
    old = old,
    now,
}

Funciones en objetos:

obj {
    old: function(){}
    now(){}
}

Pasar del metodo si no existe

obj.days?.funcName?.(0,1) ?? console.log('Method does not exist')


-------------------------------------------
------------- Looping objets --------------
-------------------------------------------

const entries = object.entries(-an entry of object-)
const values = object.values(-a value of object-)

for (const [key, {x, y}] of entries)


-------------------------------------------
------------------- Sets ------------------
-------------------------------------------

Creacion del set -
const orderSet = new Set ([1,2,3,...])

Tamaño del set      ¿Tiene dentro? (t/f)
orderSet.size       orderSet.has()

Añadir / Borrar         Convertir un array a set y de vuelta a array
orderSet.add/delete()   const newArr = [...new Set(arr)]


-------------------------------------------
------------------- Maps ------------------
-------------------------------------------

Creacion mapas
const example = new Map()

Añadir valores (devuelve el map entero)
example.set('a','b')    // a => b    - Así 

Te devuelve el valor de la key que busques
example.get('key)


Convertir objetos en un map
const x = new Map(Object.entries(objeto))


-------------------------------------------
----------------- Strings -----------------
-------------------------------------------

Buscar primera y ultima ocurrencia
x.indexOf('ocurrencia')
x.lastIndexOf('ocurrencia')

Buscar desde la posicion X(incluida) hasta la Y(no incluida) / Si se omite el segundo valor va hasta el final
x.slice(1,3)     => x=hola  => 'ol'

Reemplazar un caracter (con All para todos)      Quitar espacios sobrantes y \n
x.replace('A', 'B') / .replaceAll()              x.trim()

Ver si empieza el string por X                   Ver si tiene una coincidencia
x.startsWith('string') / endsWith()              x.includes('string')

Separar o juntar
x.split('character')    x.join('character')

Rellenar al principio o al final con caracteres
x.padStart(number, 'character')     x.padEnd(number, 'character')

Para repetir multiples veces el string
x.repeat(number)


-------------------------------------------
---- CALL & BIND / APPLY METHODS (FNs) ----
-------------------------------------------

object {
    fn(par){
        example
    }
}

Para asignar el objeto y valores default en caso de ser necesario. La diff entre bind y call es que call la llama al instante
const func = object.fn
funct.call(object, 12, 'Hello')

Para usar el apply hay que darle los parametros como array
const arr = [12, 'Hello']
funct.apply(object, arr)


-------------------------------------------
------------- CLOSERS & IIFE --------------
-------------------------------------------

Los clousers permiten ejecutar variables del cierre:
fn () {
    let a = 0
    const funct = fn () {
        a++
    }
}

funct()  // a pasa a valer 1

El IIFE es ejecutar una funcion una vez: (para ello metemos todo entre parentesis y ponemos () al final)
(fn(){
    alert('Hello!')
}) ();


-------------------------------------------
----------- WORKING WITH ARRAYS -----------
-------------------------------------------

Para copiar el array de esos puestos (n2 no incluido)
.slice(n, n2)

Para cortar el array desde n en n2 puestos delante // MUTA //
.splice(n, n2)

Para darle la vuelta
.reverse()

Juntar arrays
arr.concat(arr2)

Para convertir el array en string con separadores
.join('-')

----------------- AT -----------------

Para indicar la posicion de un array, siendo -1 el típico length -1
arr.at(n)

----------------forEach -----------------

Para recorrer el array (puedes especificar esos valores)
arr.forEach(function(mov, i, arr) {...})

-------------forEach(maps) -----------------

Para recorrer un map
map.forEach(value, key, map)

-------------forEach(sets)-----------------

Para el set, no hay segundo valor, pero se tiene que declarar
set.forEach(value,_,map)


-------------Maps-----------------

Para recorrer un array usando map, se usa así:
arr.map((value, key, arr){...})

El map devuelve un array duplicado con los cambios del bucle.

--------------Filter & Reduce----------------

El filter devuelve el item del array si cumple un requisito y lo pushea en el return
arr.filter(item => item > 0)

El reduce devuelve un valor pasado por todos los valores. Además tiene un parámetro más, el acc (acumulador/snowball)
arr.reduce(function (acc, cur, i, arr) {
    return acc + cur
}, n)       ----------- Ponemos en N el número por el que queremos empezar a sumar

--------------Find/FindIndex --------------------------

Sirve para buscar elementos, devuelve el primer item de la busqueda (usado normalmente para buscar elementos unicos(DNI...))
arr.find(item => item === 'Daniel Fabian Alcon')

FindIndex sirve para lo mismo pero devuelve el index de la primera concordancia

*/
