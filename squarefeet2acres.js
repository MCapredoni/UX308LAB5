// This program *converts* **squarefeet** to **acres**

let squarefeet = 350000;

let acres = squarefeet/43560;

if (squarefeet >= 100000){
    acres = "2.295684113865932";
}   else if (squarefeet >= 125000){
    acres = "2.869605142332415";
}   else if (squarefeet >= 350000){
    acres = "8.034894398530762";
}   

console.log(`${squarefeet} squarefeet is ${acres} acres`);