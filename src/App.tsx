import { StrictMode, Suspense } from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { Layout } from './Layout'

export const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <CssBaseline>
                    <Layout></Layout>
                </CssBaseline>
            </Provider>
        </StrictMode>
    )
}
