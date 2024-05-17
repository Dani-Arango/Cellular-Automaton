import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: `
<div class="flex flex-col h-screen">
  <div class="p-6">
    <div class="mb-6">
      <p class="text-lg font-bold">Un autómata celular es un modelo matemático compuesto por una grilla de celdas que pueden estar en diferentes estados, donde cada celda cambia de estado en función de reglas específicas basadas en los estados de las celdas vecinas. Este modelo se utiliza para simular fenómenos complejos a partir de reglas simples.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="flex flex-col bg-gray-200 p-6">
        <img src="/assets/images/gamelife.png" alt="Game of Life" class="w-60 h-[150px] mx-auto mb-4">
        <h3 class="text-2xl font-bold">Game life</h3>
        <p>
          "Game of Life" es un autómata celular creado por John Conway, donde cada celda puede estar viva o muerta, y su estado en la siguiente generación depende del número de celdas vecinas vivas.
          Con reglas que permiten la simulación de patrones y comportamientos emergentes complejos, como osciladores y naves espaciales.
        </p>
      </div>
      <div class="flex flex-col bg-gray-200 p-6">
        <img src="/assets/images/wirewolrd.png" alt="WireWolrd" class="w-60 h-[150px] mx-auto mb-4">
        <h3 class="text-2xl font-bold">Wireworld</h3>
        <p>
          "Wireworld" es un autómata celular utilizado para simular circuitos digitales. En este modelo, las celdas pueden estar en cuatro estados: vacío, cable, electrón de cabeza y electrón de cola.
          Las reglas determinan cómo los electrones se mueven a través de los cables, permitiendo la construcción y simulación de circuitos.
        </p>
      </div>
      <div class="flex flex-col bg-gray-200 p-6">
        <img src="/assets/images/cyclic.png" alt="Cyclic Cellular Automaton" class="w-60 h-[150px] mx-auto mb-4">
        <h3 class="text-2xl font-bold">Cyclic Cellular Automaton</h3>
        <p>
          "Cyclic Cellular Automaton" es un tipo de autómata celular donde cada celda puede estar en uno de varios estados, y cambia al siguiente estado en un ciclo si un número suficiente de sus vecinas están en el estado que sigue en el ciclo.
          Este modelo es utilizado para estudiar patrones de onda y auto-organización en sistemas dinámicos.
        </p>
      </div>
    </div>
  </div>
</div>
  `
})
export class InfoComponent {
}
