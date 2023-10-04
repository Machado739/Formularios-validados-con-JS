1.	Explique el funcionamiento de la etiqueta input en HTML, indicando los diferentes argumentos que puede tener.
La etiqueta <input> en HTML se utiliza para crear campos de entrada en formularios, permitiendo a los usuarios ingresar datos. Los diferentes atributos que puede tener incluyen:
•	type: Este atributo define el tipo de campo de entrada que se va a crear, y varía según el valor asignado.
•	name: Este atributo asigna un nombre al campo, que se utiliza para identificar el campo en el lado del servidor cuando se envía el formulario.
•	id: Proporciona un identificador único para el campo, lo que facilita la manipulación del campo a través de JavaScript o CSS.
•	value: Define el valor inicial del campo. Puede ser un valor predeterminado o el valor actual ingresado por el usuario.
•	placeholder: Muestra un texto de marcador de posición dentro del campo antes de que el usuario ingrese datos.
•	required: Si se establece en "required," el campo se convierte en obligatorio, lo que significa que el usuario debe completarlo antes de enviar el formulario.
•	readonly: Si se establece en "readonly," el campo se vuelve de solo lectura y el usuario no puede modificar su contenido.
•	disabled: Si se establece en "disabled," el campo se deshabilita y el usuario no puede interactuar con él.

3.	Explique como puede configurarse la etiqueta button
La etiqueta <button> se utiliza para crear botones en formularios o en otras partes de una página web. Se puede configurar mediante los siguientes atributos:
•	type: Define el tipo de botón, que puede ser "submit" para enviar un formulario, "reset" para restablecer los valores del formulario o "button" para un botón genérico. Si no se especifica, el valor predeterminado es "submit".
•	name: Asigna un nombre al botón, que se utiliza para identificarlo en el lado del servidor cuando se envía un formulario.
•	value: Define el valor del botón, que se envía al servidor junto con el formulario cuando se hace clic en el botón. Esto es útil cuando hay varios botones en un formulario y se necesita saber cuál se hizo clic.
•	disabled: Si se establece en "disabled," el botón se deshabilita y el usuario no puede interactuar con él.

4.	Explique el método addEventlistener y como se utiliza en este proyecto
Se utiliza para agregar un evento a un elemento HTML y especificar una función que se ejecutará cuando ocurra ese evento. En el proyecto, se utiliza para agregar un controlador de eventos al formulario.
En este caso, se agrega un controlador de eventos al evento "submit" del formulario. Cuando el usuario envía el formulario haciendo clic en el botón "Enviar", se ejecuta la función especificada. Esto permite validar los campos del formulario y mostrar mensajes de error en función de las validaciones.

5. Explique la forma en que son validadas cada una de las entradas.
se realizan mediante expresiones regulares (regex) y condiciones lógicas. Aquí está un resumen de cómo se validan las entradas:
•	ID (5 dígitos exactos): Se utiliza una expresión regular /^\d{5}$/ para asegurarse de que tenga exactamente 5 dígitos.
•	Nombre y apellidos (no pueden estar vacíos): Se verifica que no estén en blanco usando. trim().
•	Teléfono ((###)###-####): Se utiliza una expresión regular /^\(\d{3}\)\d{3}-\d{4}$/ para asegurarse de que siga el formato requerido.
•	Correo electrónico: Se utiliza una expresión regular para verificar que tenga un formato de dirección de correo electrónico válido.
•	Edad (número positivo): Se convierte a un número y se verifica que sea mayor que 0.
•	Fecha de nacimiento (AAAA-MM-DD): Se utiliza una expresión regular para asegurarse de que siga el formato AAAA-MM-DD.
