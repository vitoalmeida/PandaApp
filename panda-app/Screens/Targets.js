import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// Componentes
import ProfileIcon from '../Components/ProfileIcon'
import Target from '../Components/Target'

const Targets = () => {
    return (
        <View style={[styles.main]}>
            <View style={[styles.header]}>
                <View style={[styles.header_top]}>
                    <Text style={[styles.textTitle]}>
                        Metas 
                    </Text>
                    <ProfileIcon />
                </View>
                <View style={[styles.header_bottom]}> 
                    <Text style={[styles.textPoupanca]}>
                        Poupança
                    </Text>
                    <Text style={[styles.textSaldo]}>
                        R$ 3.500,00
                    </Text>
                </View>
            </View>
            <View style={[styles.targets]}>
                <View style={[styles.headerMetas]}>
                    <Text style={[styles.textSuasMetas]}>Suas metas</Text>
                    <Text style={[styles.textFiltro]}>Filtro</Text>
                </View>
                <View style={[styles.targetsList]}>
                    <Target color={'#43E09E'} title={'Viagem para inglaterra'}></Target>
                    <Target color={'#7643E1'}></Target>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // Header
    main: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        height: 'vh%',
    },
    header: {
        flexDirection: 'column',
        marginTop: '2rem',
    },
    header_top: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    header_bottom: {
        flexDirection: 'column',
        width: '100%',
    },
    textTitle: {
        fontFamily: 'monospace',
        color: '#000000',
        fontSize: '2rem',
    },
    textPoupanca: {
        fontFamily: 'monospace',
        color: '#AAAAAA',
        fontSize: '0.9rem'
    },
    textSaldo: {
        color: '#000000',
        fontSize: '1.6rem',
    },

    // Targets
    targets: {
        marginTop: '5rem',
        height: '100%'
    },
    headerMetas: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    textSuasMetas: {
        color: '#147A50',
        fontSize: '1.2rem',
    },
    textFiltro: {
        color: '#333333',
        fontSize: '1.2rem',
    },
    targetsList: {
        backgroundColor: 'pink',
        marginTop: '1.5rem',
    },
})

export default Targets;