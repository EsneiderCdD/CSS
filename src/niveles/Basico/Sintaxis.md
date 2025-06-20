## 🔰 ¿Qué es CSS? ##

1. Cascading: las reglas se aplican siguiendo una jerarquía y un sistema de prioridades.
2. Style: se enfoca exclusivamente en lo visual.
3. Sheets: se organiza en archivos o bloques reutilizables.

## 🧱 Estructura básica ##

selector {
  propiedad: valor;
}

1. Selector: a qué elemento HTML se le aplicará.
2. Propiedad: qué aspecto visual queremos modificar.
3. cómo queremos modificarlo.

## 🎯 Tipos de Selectores (básicos) ##

1. Selector de etiqueta
Aplica estilos a todos los elementos de un tipo específico.

.titulo {
  font-weight: bold;
}

2. Selector de clase (.nombre)
Permite aplicar estilos a uno o varios elementos que comparten una clase.

.titulo {
  font-weight: bold;
}

3. Selector de ID (#nombre)
Aplica estilo a un solo elemento con un id específico.

#principal {
  background-color: yellow;
}

4. Selector universal (*)
Aplica estilos a todos los elementos. Muy usado para resets.

* {
  margin: 0;
  padding: 0;
}

## NOTA : CSS es case-sensitive ##


## 🎨 ¿Cómo aplicamos CSS? ##

1. Estilos en línea (inline)
Directamente en el HTML ó en JSX, como:

style={{ color: 'red' }}

2. Estilos internos (<style> en el HTML)
Se usa para definir estilos dentro del propio documento HTML.

3. Estilos externos (archivos .css)

⚠️ En React, los estilos externos suelen implementarse como CSS Modules, Styled Components o Tailwind







