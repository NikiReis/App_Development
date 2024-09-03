import {View, Text, Button} from 'react-native';
import { useState } from 'react';

function App(){
    const [name, setName] = useState('');
    const [age, SetAge] = useState(22)
    function catchNameAGe(name,age){
        setName(name)
        SetAge(age)
    }


    return (
        <View style={{marginTop: 50}}>
            <Text style={{fontSize: 25}}>{name}</Text>
            <Button title='save'
            onPress={() => catchNameAGe("Linek Reis", 22)}/>
        </View>
    )
}

export default App