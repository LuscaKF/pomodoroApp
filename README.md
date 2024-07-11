# Aplicativo de Timer Pomodoro

## Visão Geral

Este projeto é um aplicativo de timer Pomodoro construído usando React. Ele permite que os usuários gerenciem seu tempo de forma eficiente utilizando a Técnica Pomodoro, que envolve trabalhar por um período determinado seguido por um curto descanso. O aplicativo oferece durações de trabalho e descanso personalizáveis e ciclos, além de incluir notificações sonoras para os períodos de trabalho e descanso.

## Tecnologias Utilizadas

- **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Um superset do JavaScript que adiciona tipagem estática.
- **Custom Hooks**: Para gerenciar intervalos e timers.
- **Áudio HTML5**: Para tocar notificações sonoras.
- **CSS**: Para estilizar o aplicativo.

## Estrutura do Projeto

```bash
pomodoro-timer-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Timer.tsx
│   │   └── PomodoroTimer.tsx
│   ├── hooks/
│   │   └── use-interval.ts
│   ├── sounds/
│   │   ├── clock-alarm-8761.mp3
│   │   └── beep-warning-6387.mp3
│   ├── utils/
│   │   └── seconds-to-time.ts
│   └── index.tsx
├── package.json
└── README.md
```

# Instalação e Execução
## Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

## Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

## Passos
 - 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/pomodoro-timer-app.git
cd pomodoro-timer-app
```

- 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

- 3. Inicie o aplicativo
```bash
npm start
# ou
yarn start
O aplicativo estará disponível em http://localhost:3000.
```

# Uso
## Iniciar um Ciclo de Trabalho
- Clique no botão "Work" para iniciar um ciclo de trabalho.
  
## Iniciar um Período de Descanso
- Clique no botão "Rest" para iniciar um período de descanso curto.

## Pausar/Retomar o Timer
- Clique no botão "Pause/Play" para pausar ou retomar o timer.

# Personalização
## Você pode personalizar os tempos de trabalho, descanso curto, descanso longo e a quantidade de ciclos, alterando as props passadas para o componente PomodoroTimer no arquivo src/index.tsx.

```typescript
<PomodoroTimer 
  pomodoroTime={1500} // Tempo de trabalho em segundos (25 minutos)
  shortRestTime={300} // Tempo de descanso curto em segundos (5 minutos)
  longRestTime={900} // Tempo de descanso longo em segundos (15 minutos)
  cycles={4} // Número de ciclos antes de um descanso longo
/>
```

# Exemplo em imagens:
![pomodoro1](https://github.com/LuscaKF/pomodoroApp/assets/62342102/b78d0e6f-3ceb-47f3-8f0d-8fa09da18404)
![pomodoro2](https://github.com/LuscaKF/pomodoroApp/assets/62342102/4fceba95-3461-48de-bad7-1e383f2a66c0)


