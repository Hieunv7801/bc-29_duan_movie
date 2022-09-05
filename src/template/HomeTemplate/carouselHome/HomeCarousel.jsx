import React, {useEffect, useState} from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch  } from 'react-redux';
import {getCarouselAction} from '../../../redux/actions/CarouselAction'
import './HomeCarousel.css';

const contentStyle = {
    height: '650px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',

};

export default function HomeCarousel(props) {

    const { arrCarousel } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();

    //Sẽ tự kích hoạt khi component load ra 
    useEffect( () => {
    
        //1 action = {type:'',data}
        //2 (phải cài middleware): callBackFunction (dispatch)

        // const action = getCarouselAction(1);

        dispatch(getCarouselAction());
    }, [])
    const renderImg = () => {
        return arrCarousel.map((item, index) => {
            return <div key={index}>
                <div style={{...contentStyle, backgroundImage:`url(${item.hinhAnh})`}}>
                    <img src={item.hinhAnh}alt="" className=' opacity-0' />
                </div>
            </div>
        });
    }
    return (
        <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}}>
            {renderImg()}
        </Carousel>
    )
}
