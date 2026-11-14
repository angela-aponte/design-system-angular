# Mini Design System

Biblioteca de componentes reutilizables construida con Angular. Incluye botones, alertas e insignias con variantes, y una página que los muestra en uso.

🔗 **Demo:** https://angela-aponte.github.io/design-system-angular/

## Componentes

| Componente | Selector | Variantes |
|------------|----------|-----------|
| Botón | `ds-boton` | primario, secundario, peligro |
| Alerta | `ds-alerta` | info, éxito, error |
| Insignia | `ds-insignia` | azul, verde, rojo |

## Tecnologías

- Angular (componentes standalone, `input()` y proyección de contenido con `ng-content`)
- TypeScript, HTML y CSS (variables CSS como tokens de diseño)
- GitHub Actions y GitHub Pages

## Ejecución local

```bash
git clone https://github.com/angela-aponte/design-system-angular.git
cd design-system-angular
npm install
ng serve
```

## Pruebas

```bash
ng test
```

## Despliegue

Cada `push` a `main` ejecuta el pipeline de GitHub Actions: compila la aplicación, la publica en GitHub Pages y verifica que el sitio responda correctamente.

## Autora

Angela Aponte · Ingeniería de Sistemas, UCEVA · Arquitectura de Software