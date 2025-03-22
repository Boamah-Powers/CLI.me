# Terminal-Style Personal Website

A modern, interactive personal website that mimics a terminal/command-line interface. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🖥️ Authentic terminal look and feel
- ⌨️ Interactive command-line interface
- 📝 Typing animations for output
- 🔄 Command history navigation
- 🎨 Custom terminal styling with scanlines
- 📱 Mobile-responsive design
- ♿ Accessibility support

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Fira Code (Monospace Font)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Boamah-Powers/CLI.me.git
cd CLI.me
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

- `help` - Display available commands
- `clear` - Clear the terminal screen
- `about` - Show information about me
- `projects` - List my projects
- `skills` - View my technical skills
- `contact` - Get my contact information

## Customization

1. Edit `src/app/lib/commands.ts` to modify available commands and their responses
2. Update `src/app/components/WelcomeMessage.tsx` to change the welcome message
3. Modify `tailwind.config.ts` to adjust the terminal theme colors
4. Update `src/app/globals.css` for additional styling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
