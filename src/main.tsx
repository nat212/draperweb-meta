import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from './dev'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <RouterProvider router={router} />
        </DevSupport>
    </React.StrictMode>,
)
