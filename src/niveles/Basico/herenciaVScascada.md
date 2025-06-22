

## Herencia y Cascada

### Cascada (Prioridad)

Orden de aplicación:

1. `!important`
2. Especificidad (ID > Clase > Etiqueta)
3. Orden de aparición en el CSS (lo último sobrescribe lo anterior)

/* Menos específico */
p { color: blue; }

/* Más específico */
.especial { color: green; }

/* Aún más específico */
#unico { color: red; }


### Herencia

Algunas propiedades como `color`, `font-family`, y `line-height` se heredan de los elementos padre. Propiedades como `margin`, `padding`, `border` no se heredan.
