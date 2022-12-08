import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useSession() {
    const [session, setSession] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        const checkAuth = () => {
            if (typeof window !== 'undefined') {
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                if (!(user && user.token)) {
                    router.push('/signin')
                    setSession(false)
                } else {
                    setSession(true)
                }
            }
        }
        checkAuth()
    })
    return {
        session
    }
}