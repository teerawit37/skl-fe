import { NextPage } from 'next'
import type { ReactElement } from 'react'
import AppLayout from './AppLayout'
import AuthLayout from './AuthLayout'


export type PageWithAuthLayoutType = NextPage & { layout: typeof AuthLayout }
export type PageWithAppLayoutType = NextPage & { layout: typeof AppLayout }

export type PageWithLayoutType =
    | PageWithAuthLayoutType
    | PageWithAppLayoutType
export type LayoutProps = ({
    children,
}: {
    children: ReactElement
}) => ReactElement
export default PageWithLayoutType