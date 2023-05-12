import './../styles/globals.css'

export const metadata = {
  title: 'Advice Generator App',
  description: 'Generat Advice for Api Advice Generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
