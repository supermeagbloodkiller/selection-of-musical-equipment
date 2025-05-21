import './globals.css'

export const metadata = {
  title: 'Музыкальные группы и исполнители',
  description: 'Информация о известных музыкальных группах, их гитаристах и басистах',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}
