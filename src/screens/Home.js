import React from 'react'  //import do JSX que transforma JS em uma view HTML. OBRIGATÓRIO
import { createAppContainer, withNavigation } from 'react-navigation';
import Navigator from '../Navigator';

const AppIndex = createAppContainer(Navigator)

function Home({ navigation }) {

    return  (
        <>
            <AppIndex/> 
        </>
    );
}
export default withNavigation(Home);