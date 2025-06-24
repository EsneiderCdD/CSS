🔹 Combinadores
Los combinadores nos permiten seleccionar elementos según su relación con otros elementos.

1. Selector de Descendiente (espacio)
Selecciona todos los elementos que están dentro de otro.

.container p {
  color: red;
}

2. Selector de Hijo Directo (>)
Selecciona solo los hijos directos.

.container > p {
  color: blue;
}

3. Selector de Hermano Adyacente (+)
Selecciona el elemento inmediatamente después.

h1 + p {
  font-weight: bold;
}
👉 Solo el primer p después de un h1 será en negrita.

4. Selector de Hermanos Generales (~)
Selecciona todos los hermanos siguientes.

h1 ~ p {
  font-style: italic;
}
👉 Todos los p que estén después del h1 (aunque no sean consecutivos) serán itálicos.

🔹 Pseudo-clases útiles

1. :hover 
Aplica un estilo cuando el usuario pasa el mouse.

2. :nth-child()
Selecciona elementos por su orden.

li:nth-child(2) {
  color: green;
}
👉 El segundo li siempre será verde.
Puedes usar:
nth-child(odd) → Elementos en posición impar.
nth-child(even) → Elementos en posición par.
Fórmulas: nth-child(3n) → Cada 3 elementos.

3. :first-child y :last-child
Seleccionan el primer o último hijo de un contenedor.

ul li:first-child {
  font-size: 20px;
}

ul li:last-child {
  font-size: 12px;
}
