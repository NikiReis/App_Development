import {View, Text, } from 'react-native';

function App(){
    return (
        <View style={{marginTop: 50}}>
            <Header/>
            <LogoImage/>
        </View>
    )
}
export default App

function Header(){
    let name = "Linek Reis"
    return <Text style={{fontSize: 24, padding: 16}}>{name}</Text>
}

function LogoImage(){
    let img = "https://pt.wikipedia.org/wiki/Lotus_98T"
    return (
        <Image
            source={{uri: img}}
            style={{width: '100%', height: 300}}
        />
    );
}