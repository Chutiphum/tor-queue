import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'เข้าสู่ระบบ...',
    description: 'Generated by create next app',
}

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}