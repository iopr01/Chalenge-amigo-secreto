let nombres = [];
        
        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let amigo = input.value.trim();
            
            if (amigo === "") {
                alert("Debe introducir un amigo");
                return;
            } else {

                nombres.push(amigo);
                let lista = document.getElementById("listaAmigos");
                let li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
                input.value = "";
                mostrarListaAmigo();

            }
            
            
            
        }

    
        
        function sortearAmigo() {
            if (nombres.length < 2) {
                alert("Debe haber al menos dos participantes para sortear");
                return;
            }else {

                let indice = Math.floor(Math.random() * nombres.length);
            document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indice];

            }
            
        }