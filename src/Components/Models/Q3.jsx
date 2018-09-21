import React, { Component } from 'react';
import MainModel from './MainModel';
import audiQ3 from '../../imgAudiModels/audiQ3FL.jpg'

class Q3 extends Component {
    constructor(props) {
        super(props);

        const basicValue = 140000;
        const urlImg = audiQ3;
        const configurationDetails = {
            wheelsOptions: [
                {
                    item: '185/65R18',
                    price: '0',
                },
                {
                    item: '195/65R19',
                    price: '2600',
                },
                {
                    item: '205/70R20',
                    price: '3900',
                },
            ],
            colorOptions: [
                {
                    item: 'black/white',
                    price: '0',
                },
                {
                    item: 'orange/silver',
                    price: '2100',
                },
                {
                    item: 'red/aqua',
                    price: '3300',
                },
            ],
            styleOptions: [
                {
                    item: 'standard',
                    price: '0'
                },
                {
                    item: 'sport',
                    price: '4000'
                },
                {
                    item: 's-line',
                    price: '5300'
                },
            ],
            engineOptions: [
                {
                    item: '140km 1600',
                    price: '0',
                },
                {
                    item: '170km 1900',
                    price: '5500',
                },
                {
                    item: '235km 2200',
                    price: '7200',
                },
            ]
        };

        this.state = {
            basicValue,
            configurationDetails,
            urlImg,
        }

    }



    render() {
        const { configurationDetails, basicValue, urlImg } = this.state;
        return (
            <MainModel
                configurationInfo={configurationDetails}
                basicValue={basicValue}
                image={urlImg}
            />

        );
    }
}

export default Q3;
